export const replaceAll = (
  subject: string,
  placeholder: string,
  replacement: string
) => subject.split(placeholder).join(replacement)
