import fs from "fs"

// Read and parse the JSON file
// print current working directory
const jsonData = JSON.parse(fs.readFileSync("icons.json", "utf8"))

// Function to convert path data to JSX
function pathToJSX(pathData: string) {
  return pathData
    .split("\n")
    .map((line: string) => `              ${line.trim()}`)
    .join("\n")
}

// Function to generate a component for each icon
function generateIconComponent(iconName: string, iconData: any) {
  const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon`
  const weights = Object.keys(iconData)

  let componentCode = `import { IconProps } from "../../types"

export default function ${componentName}({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
`

  weights.forEach((weight: string) => {
    const weightData: any = iconData[weight]
    if (weightData && weightData.path) {
      componentCode += `    case "${weight}":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 ${weightData.geometry.width} ${weightData.geometry.height}"
          className={className}
        >
          <path
            d="${pathToJSX(weightData.path)}"
            fill={color}
          />
        </svg>
      )
`
    } else {
      componentCode += `    case "${weight}":
      return null
`
    }
  })

  componentCode += `    default:
      return null
  }
}
`

  return componentCode
}

// Generate components for each icon
const symbols = Object.keys(jsonData.symbols)
for (const symbol of symbols) {
  const iconData = jsonData.symbols[symbol]

  const iconNameParts = symbol.split(".").map((p, i) => {
    if (i === 0) {
      // replace actual numbers with their word name
      p = p
        .replace("1", "One")
        .replace("2", "Two")
        .replace("3", "Three")
        .replace("4", "Four")
      p = p
        .replace("5", "Five")
        .replace("6", "Six")
        .replace("7", "Seven")
        .replace("8", "Eight")
      p = p.replace("9", "Nine").replace("0", "Zero")
    }
    return p
  })
  let iconName = ""
  for (const part of iconNameParts) {
    iconName += part.charAt(0).toUpperCase() + part.slice(1)
  }
  iconName += "Icon"
  const fileName = iconName + ".tsx"

  const componentCode = generateIconComponent(iconName, iconData)

  // make src/components/icons/iconName directory if not exists
  const dir = "src/icons/" + iconName
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  fs.writeFileSync(dir + "/" + fileName, componentCode)

  fs.writeFileSync(
    dir + "/" + "index.ts",
    "export { default as " + iconName + " } from './" + iconName + "'",
  )

  // if "\nexport * from './" + iconName + "' not in index.ts in src/icons, add it
  if (
    !fs
      .readFileSync("src/icons/index.ts", "utf8")
      .includes("export * from './" + iconName + "'")
  ) {
    fs.appendFileSync(
      "src/icons/index.ts",
      "\nexport * from './" + iconName + "'",
    )
  }
}

console.log("Icon components generated successfully!")
