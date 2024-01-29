const a = {}
const aa = "deep"
const aaa = "treasure"

const b = { deep: { treasure: "oro" }}
const bb = "deep"
const bbb = "treasure"

const c = { sand: { animal: "pulpo" }}
const cc = "deep"
const ccc = "treasure"

const d = { sand: { animal: "pulpo" }}
const dd = "sand"
const ddd = "animal"

const e = { sand: { animal: "pulpo" }}
const ee = "sand"
const eee = "pulpo"

function searchInOcean(ocean, section, item) {
  // tu código aquí
  console.log("Ocean: " + ocean)
  console.log("Section: " + section)
  console.log("Item: " + item)

  console.log("ocean.section: " + Object.keys(ocean?.[section]))
  console.log("ocean.section.item: " + ocean?.[section]?.[item])

  if (ocean?.[section] !== undefined && Object.keys(ocean?.[section]) == item) {
    return true
  } else {
    return false
  }
}

searchInOcean(a, aa, aaa)
searchInOcean(b, bb, bbb)
searchInOcean(c, cc, ccc)
searchInOcean(d, dd, ddd)
searchInOcean(e, ee, eee)