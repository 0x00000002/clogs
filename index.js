const logIt = (...args) => (type = 's') => {
  switch (type) {
    case 'string': console.log(...args); break
    case 'table': console.table(args); break
    case 'keys': console.log(Object.keys(args)); break
    case 'values': console.log(Object.values(args)); break
    case 'entries': console.log(Object.entries(args)); break
    }
}

const slog = str => logIt(str)('string')
const dlog = obj => logIt(obj)('debug')
const tlog = tbl => logIt(tbl)('table')
const klog = obj => logIt(obj)('keys')
const vlog = obj => logIt(obj)('values')
const elog = obj => logIt(obj)('entries')

export default [
  slog,
  dlog,
  tlog,
  klog,
  vlog,
  elog
]