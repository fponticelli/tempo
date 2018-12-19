import { stringValue,
  ValueDecoder,
  objectValue,
  arrayValue,
  decodeValue,
  literalValue,
  booleanValue
} from 'partsing/value'
import { success, failure } from 'partsing/core/result'
import { Decoder } from 'partsing/core/decoder'
import {
  AttributeType,
  Attribute,
  stringType,
  booleanType,
  enumeratedBooleanType,
  classType,
  styleType,
  Tag,
  integerType,
  spaceSeparatedType,
  EnumType,
  lengthType,
  colorType,
  commaSeparatedType,
  numberType
} from './attribute'
import { DecodeError, Entity } from 'partsing/error'
import { Element, Category, noContent, elementContent, contentCategory } from './element'
import { Event } from './event'

function camelize(str: string) {
  const words = str.split(/[-:_\s]+/)
  if (words.length === 0)
    return ''
  else if (words.length === 1)
    return words[0]
  else
    return [words[0]].concat(words.slice(1).map(v => v.substring(0, 1).toUpperCase() + v.substring(1))).join('')
}

const attributeType: ValueDecoder<AttributeType> =
  objectValue({ enum: arrayValue(stringValue) }, [])
    .map(v => v.enum)
    .map(v => new EnumType(v))
    .or(
      stringValue.flatMap(type => Decoder.of(input => {
        switch (type) {
          case 'bool': return success(input, booleanType)
          case 'boolean': return success(input, booleanType)
          case 'class': return success(input, classType)
          case 'color': return success(input, colorType)
          case 'ebool': return success(input, enumeratedBooleanType)
          case 'eboolean': return success(input, enumeratedBooleanType)
          case 'int': return success(input, integerType)
          case 'integer': return success(input, integerType)
          case 'positive-integer': return success(input, integerType)
          case 'number': return success(input, numberType)
          case 'non-zero-positive-integer': return success(input, integerType)
          case 'length': return success(input, lengthType)
          case 'string': return success(input, stringType)
          case 'style': return success(input, styleType)
          case 'comma-separated': return success(input, commaSeparatedType)
          case 'space-separated': return success(input, spaceSeparatedType)
          default: return failure(
            input,
            ...[
              'bool',
              'boolean',
              'class',
              'ebool',
              'eboolean',
              'int',
              'integer',
              'length',
              'string',
              'style',
              'space-separated'
            ].map(t => DecodeError.expectedMatch(Entity.STRING, t))
          )
        }
      }))
  )

const tagValue: ValueDecoder<Tag> = stringValue.flatMap(type => Decoder.of(input => {
  switch (type) {
    case 'deprecated': return success(input, Tag.deprecated)
    case 'experimental': return success(input, Tag.experimental)
    case 'experimental-supported': return success(input, Tag.experimentalSupported)
    case 'experimentalSupported': return success(input, Tag.experimentalSupported)
    case 'legacy': return success(input, Tag.legacy)
    case 'ms-extension': return success(input, Tag.msExtension)
    case 'msExtension': return success(input, Tag.msExtension)
    case 'obsolete': return success(input, Tag.obsolete)
    case 'non-standard': return success(input, Tag.nonStandard)
    case 'nonStandard': return success(input, Tag.nonStandard)
    default: return failure(
      input,
      ...[
        'deprecated',
        'experimental',
        'experimental-supported',
        'experimentalSupported',
        'ms-extension',
        'msExtension',
        'obsolete',
        'non-standard',
        'nonStandard'
      ].map(t => DecodeError.expectedMatch(Entity.STRING, t))
    )
  }
}))

const tags = arrayValue(tagValue).or(tagValue.map(v => [v]))

const attribute: ValueDecoder<Attribute> = objectValue(
  {
    name: stringValue,
    'code-name': stringValue,
    'dom-name': stringValue,
    type: arrayValue(attributeType).or(attributeType.map(v => [v])),
    tags: tags,
    'is-property': booleanValue
  },
  ['code-name', 'dom-name', 'type', 'tags', 'is-property']
).map(o => new Attribute(
  o.name,
  o['code-name'] || camelize(o.name),
  o['dom-name'] || o['code-name'] || o.name,
  o.type || [stringType],
  o.tags || [],
  o['is-property'] || false
))

const attributes: ValueDecoder<Attribute[]> = arrayValue(attribute)

export const parseAttributes = decodeValue(attributes)

const collection = objectValue(
  {
    name: stringValue,
    type: literalValue('attributes').or(literalValue('events'), literalValue('aria-role')),
    values: arrayValue(stringValue)
  },
  []
)

const collections = arrayValue(collection).map(colls => {
  return colls.reduce(
    (acc, coll) => {
      acc.set(`${coll.type}:${coll.name}`, coll.values)
      return acc
    },
    new Map<string, string[]>()
  )
})

export const parseCollections = decodeValue(collections)

const event = objectValue(
  {
    name: stringValue,
    type: arrayValue(stringValue).or(stringValue.map(v => [v])),
    'code-name': stringValue,
    'dom-name': stringValue,
    tags: tags
  },
  ['code-name', 'dom-name', 'type', 'tags']
).map(o => new Event(
  o.name,
  o['code-name'] || 'on' + camelize(o.name),
  o['dom-name'] || o['code-name'] || 'on' + o.name,
  o.type || ['Event'],
  o.tags || []
))

const events = arrayValue(event)

export const parseEvents = decodeValue(events)

const categoryValue: ValueDecoder<Category> = stringValue
  .flatMap(value =>
    Decoder.of(input => {
      switch (value) {
        case '@all': return success(input, Category.all)
        case 'text': return success(input, Category.text)
        case 'transparent': return success(input, Category.transparent)
        case 'flow': return success(input, Category.flow)
        case 'phrasing': return success(input, Category.phrasing)
        case 'metadata': return success(input, Category.metadata)
        case 'sectioning': return success(input, Category.sectioning)
        case 'heading': return success(input, Category.heading)
        case 'embedded': return success(input, Category.embedded)
        case 'interactive': return success(input, Category.interactive)
        case 'palpable': return success(input, Category.palpable)
        case 'form-associated': return success(input, Category.formAssociated)
        case 'script-supporting': return success(input, Category.scriptSupporting)

        default: return failure(
          input,
          ...[
            'transparent',
            'flow',
            'phrasing',
            'metadata',
            'sectioning',
            'heading',
            'embedded',
            'interactive',
            'palpable',
            'formAssociated',
            'scriptSupporting'
          ].map(t => DecodeError.expectedMatch(Entity.STRING, t))
        )
      }
    })
  )

const permittedContentValue =
  arrayValue(
    categoryValue.map(contentCategory)
      .or(objectValue({ els: arrayValue(stringValue) }, []).map(o => o.els).map(elementContent))
  )
  .or(literalValue('none').withResult(noContent))

const element = objectValue(
  {
    name: stringValue,
    'code-name': stringValue,
    'dom-name': stringValue,
    interface: stringValue,
    tags: tags,
    'aria-roles':  literalValue('none').map(_ => []).or(arrayValue(stringValue)),
    'permitted-content': permittedContentValue,
    category: categoryValue,
    attributes: arrayValue(stringValue),
    events: arrayValue(stringValue)
  },
  ['code-name', 'dom-name', 'interface', 'tags', 'aria-roles', 'permitted-content', 'category', 'attributes', 'events']
).map(o => {
  return new Element(
    o.name,
    o['code-name'] || camelize(o.name),
    o['dom-name'] || o.name,
    o.interface || 'HTMLElement',
    o.tags || [],
    o['aria-roles'] || [],
    o['permitted-content'] || noContent,
    o.category,
    o.attributes || ['@global'],
    o.events || ['@global']
  )
})

const elements = arrayValue(element)

export const parseElements = decodeValue(elements)
