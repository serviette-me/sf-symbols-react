import { IconProps } from "../../types"

export default function BookmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.95703125 32.771484375"
          className={className}
        >
          <path
            d="              M3.1444 32.7719C4.1974 32.7719 4.9904 32.3749 5.8924 31.4449L10.8824 26.4139C10.9374 26.3589 11.0194 26.3589 11.0744 26.4139L16.0784 31.4589C16.9944 32.3889 17.7464 32.7719 18.8124 32.7719C20.6714 32.7719 21.9574 31.4449 21.9574 29.4899V5.1409C21.9574 1.9139 20.0294 -0.0001 16.8164 -0.0001H5.1404C1.9144 -0.0001 0.0004 1.9139 0.0004 5.1409V29.4899C0.0004 31.4449 1.2854 32.7719 3.1444 32.7719ZM5.2364 24.9509C5.0724 25.1149 4.8804 25.0329 4.8804 24.8149V5.8239C4.8804 5.1129 5.1274 4.8809 5.8244 4.8809H16.1324C16.8304 4.8809 17.0764 5.1129 17.0764 5.8239V24.8149C17.0764 25.0329 16.8714 25.1149 16.7204 24.9509L12.6324 20.9999C11.4704 19.8929 10.4864 19.8929 9.3244 20.9999Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.193359375 31.048828125"
          className={className}
        >
          <path
            d="              M2.2964 31.0493C3.1584 31.0493 3.7464 30.6663 4.8264 29.5993L9.9804 24.4453C10.0484 24.3903 10.1444 24.3903 10.2124 24.4453L15.3804 29.6133C16.4614 30.6663 17.0214 31.0493 17.8964 31.0493C19.2774 31.0493 20.1934 30.0783 20.1934 28.5743V4.5253C20.1934 1.6133 18.5804 0.0003 15.6954 0.0003H4.4984C1.6134 0.0003 0.0004 1.6133 0.0004 4.5253V28.5743C0.0004 30.0783 0.9024 31.0493 2.2964 31.0493ZM3.8964 25.2933C3.7324 25.4703 3.5274 25.4023 3.5274 25.1563V4.8943C3.5274 3.9373 3.9514 3.5273 4.8944 3.5273H15.2984C16.2424 3.5273 16.6664 3.9373 16.6664 4.8943V25.1563C16.6664 25.4023 16.4744 25.4703 16.2964 25.2933L11.2934 20.4533C10.4864 19.6743 9.7074 19.6743 8.9004 20.4533Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.123046875 31.96484375"
          className={className}
        >
          <path
            d="              M2.7484 31.9651C3.7054 31.9651 4.4024 31.5681 5.3864 30.5701L10.4594 25.4841C10.5134 25.4301 10.6094 25.4301 10.6644 25.4841L15.7504 30.5841C16.7484 31.5681 17.4044 31.9651 18.3754 31.9651C20.0154 31.9651 21.1234 30.8031 21.1234 29.0531V4.8531C21.1234 1.7771 19.3454 0.0001 16.2834 0.0001H4.8394C1.7774 0.0001 0.0004 1.7771 0.0004 4.8531V29.0531C0.0004 30.8031 1.1074 31.9651 2.7484 31.9651ZM4.6074 25.1151C4.4434 25.2791 4.2384 25.2111 4.2384 24.9781V5.3871C4.2384 4.5661 4.5664 4.2381 5.3864 4.2381H15.7364C16.5564 4.2381 16.8844 4.5661 16.8844 5.3871V24.9781C16.8844 25.2111 16.6794 25.2791 16.5154 25.1151L11.9904 20.7401C11.0054 19.7831 10.1174 19.7831 9.1324 20.7401Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.841796875 28.697265625"
          className={className}
        >
          <path
            d="              M1.2304 28.6976C1.7774 28.6976 2.1324 28.3966 3.0354 27.5076L8.8044 21.6976C8.8594 21.6286 8.9684 21.6286 9.0374 21.6976L14.7934 27.5076C15.7094 28.3966 16.0504 28.6976 16.5974 28.6976C17.3774 28.6976 17.8414 28.1646 17.8414 27.2756V3.6636C17.8414 1.2446 16.5974 -0.0004 14.2054 -0.0004H3.6234C1.2304 -0.0004 0.0004 1.2446 0.0004 3.6636V27.2756C0.0004 28.1646 0.4644 28.6976 1.2304 28.6976ZM2.0914 25.9496C1.8864 26.1546 1.6684 26.1136 1.6684 25.8126V3.6916C1.6684 2.3516 2.3514 1.6546 3.7054 1.6546H14.1364C15.4764 1.6546 16.1734 2.3516 16.1734 3.6916V25.8126C16.1734 26.1136 15.9554 26.1546 15.7364 25.9496L9.5434 19.7556C9.1734 19.4006 8.6684 19.4006 8.2984 19.7556Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.072265625 29.955078125"
          className={className}
        >
          <path
            d="              M1.7504 29.9555C2.4884 29.9555 2.9534 29.5585 4.1294 28.4105L9.4064 23.1875C9.4744 23.1325 9.5844 23.1325 9.6524 23.1875L14.9294 28.4235C16.1194 29.5585 16.5704 29.9555 17.3084 29.9555C18.3884 29.9555 19.0724 29.2035 19.0724 27.9865V4.1425C19.0724 1.4355 17.6504 0.0005 14.9704 0.0005H4.1014C1.4214 0.0005 0.0004 1.4355 0.0004 4.1425V27.9865C0.0004 29.2035 0.6704 29.9555 1.7504 29.9555ZM3.0484 25.5115C2.8574 25.6895 2.6524 25.6345 2.6524 25.3755V4.2935C2.6524 3.1995 3.1994 2.6525 4.3064 2.6525H14.7654C15.8594 2.6525 16.4204 3.1995 16.4204 4.2935V25.3755C16.4204 25.6345 16.2014 25.6895 16.0234 25.5115L10.4314 20.0975C9.8574 19.5375 9.2144 19.5375 8.6404 20.0975Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.4296875 29.326171875"
          className={className}
        >
          <path
            d="              M1.4494 29.3257C2.1194 29.3257 2.5154 28.9437 3.7464 27.7537L9.0914 22.4907C9.1604 22.4217 9.2834 22.4217 9.3374 22.4907L14.6834 27.7537C15.9144 28.9437 16.3104 29.3257 16.9804 29.3257C17.8964 29.3257 18.4294 28.7247 18.4294 27.6587V3.9237C18.4294 1.3257 17.1304 -0.0003 14.5604 -0.0003H3.8694C1.2984 -0.0003 0.0004 1.3257 0.0004 3.9237V27.6587C0.0004 28.7247 0.5334 29.3257 1.4494 29.3257ZM2.5704 25.6347C2.3794 25.8257 2.1604 25.7717 2.1604 25.4977V3.9507C2.1604 2.7757 2.7754 2.1597 3.9784 2.1597H14.4644C15.6544 2.1597 16.2694 2.7757 16.2694 3.9507V25.4977C16.2694 25.7717 16.0644 25.8257 15.8594 25.6347L9.9394 19.8927C9.5024 19.4687 8.9274 19.4687 8.4904 19.8927Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.55078125 30.43359375"
          className={className}
        >
          <path
            d="              M1.9824 30.4335C2.7754 30.4335 3.2954 30.0375 4.4294 28.9295L9.6524 23.7345C9.7204 23.6795 9.8304 23.6795 9.8984 23.7345L15.1214 28.9295C16.2694 30.0375 16.7614 30.4335 17.5684 30.4335C18.7854 30.4335 19.5504 29.5855 19.5504 28.2465V4.3065C19.5504 1.5175 18.0464 -0.0005 15.2854 -0.0005H4.2654C1.5044 -0.0005 0.0004 1.5175 0.0004 4.3065V28.2465C0.0004 29.5855 0.7794 30.4335 1.9824 30.4335ZM3.4184 25.4295C3.2404 25.5935 3.0214 25.5395 3.0214 25.2795V4.5525C3.0214 3.5275 3.5274 3.0355 4.5524 3.0355H14.9984C16.0234 3.0355 16.5294 3.5275 16.5294 4.5525V25.2795C16.5294 25.5395 16.3244 25.5935 16.1324 25.4295L10.8004 20.2485C10.1304 19.6055 9.4204 19.6055 8.7504 20.2485Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.048828125 27.86328125"
          className={className}
        >
          <path
            d="              M0.9574 27.8637C1.3264 27.8637 1.6134 27.6857 2.1054 27.1937L8.4354 20.6577C8.4904 20.6037 8.5724 20.6037 8.6274 20.6577L14.9574 27.1937C15.4354 27.6717 15.7094 27.8637 16.1054 27.8637C16.6794 27.8637 17.0484 27.4397 17.0484 26.7827V3.3227C17.0484 1.1487 15.9144 -0.0003 13.7404 -0.0003H3.3084C1.1484 -0.0003 0.0004 1.1487 0.0004 3.3227V26.7827C0.0004 27.4397 0.3694 27.8637 0.9574 27.8637ZM1.4764 26.3727C1.2444 26.6187 1.0114 26.5507 1.0114 26.2367V3.3637C1.0114 1.8047 1.8044 0.9977 3.3634 0.9977H13.6994C15.2574 0.9977 16.0504 1.8047 16.0504 3.3637V26.2367C16.0504 26.5507 15.8184 26.6187 15.5724 26.3727L8.9964 19.5917C8.7364 19.3187 8.3124 19.3187 8.0524 19.5917Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.65234375 27.42578125"
          className={className}
        >
          <path
            d="              M0.8064 27.426C1.0934 27.426 1.3534 27.316 1.6134 27.029L8.2444 20.125C8.2854 20.07 8.3534 20.07 8.4084 20.125L15.0254 27.029C15.2984 27.289 15.5314 27.426 15.8454 27.426C16.3244 27.426 16.6524 27.07 16.6524 26.537V3.158C16.6524 1.094 15.5584 0 13.5074 0H3.1444C1.0934 0 0.0004 1.094 0.0004 3.158V26.537C0.0004 27.07 0.3284 27.426 0.8064 27.426ZM1.1624 26.592C0.9164 26.852 0.6704 26.783 0.6704 26.455V3.186C0.6704 1.531 1.5174 0.67 3.1854 0.67H13.4664C15.1344 0.67 15.9824 1.531 15.9824 3.186V26.455C15.9824 26.783 15.7504 26.852 15.4904 26.592L8.7224 19.496C8.5174 19.277 8.1344 19.277 7.9294 19.496Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}