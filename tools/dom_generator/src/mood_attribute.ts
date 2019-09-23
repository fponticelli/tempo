export class MoodAttribute {
  constructor(readonly name: string, readonly typeToString: (elInterface: string) => string) {}

  pairToString(elInterface: string): string {
    const nameCapitalized = this.name.substring(0, 1).toUpperCase() + this.name.substring(1)
    return `mood${nameCapitalized}?: ${this.typeToString(elInterface)}`
  }
}

export const typeToString = (elInterface: string) => `MoodAttribute<State, ${elInterface}>`

export const moodAttributes = [
  new MoodAttribute('afterRender', typeToString),
  new MoodAttribute('afterChange', typeToString),
  new MoodAttribute('beforeChange', typeToString),
  new MoodAttribute('beforeDestroy', (elInterface: string) => `(el: ${elInterface}) => void`)
]
