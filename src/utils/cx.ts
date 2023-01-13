export default function cx(...classnames: (string | boolean)[]) {
  return classnames.filter(Boolean).join(' ')
}
