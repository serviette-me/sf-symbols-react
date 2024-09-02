import { IconProps } from "../../types"

export default function CameraMacroIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.42805906928634 32.5322265625"
          className={className}
        >
          <path
            d="              M15.7241 30.6177C15.7241 31.7117 16.6131 32.5327 17.7471 32.5327C25.6091 32.5327 32.8681 27.7467 35.2611 20.9797C35.7811 19.5307 35.0561 18.4637 33.5251 18.4637C27.7141 18.4637 22.7511 21.0337 19.7571 25.3267V16.7137C24.6521 15.8387 28.0151 11.7917 28.0151 6.5557C28.0151 4.8197 27.8101 3.0827 26.9351 1.4287C26.3201 0.2397 24.8431 -0.0343 23.8861 0.9367L21.3701 3.5207L19.2241 0.7587C18.4451 -0.2533 17.0361 -0.2533 16.2571 0.7587L14.1111 3.5207L11.5951 0.9367C10.6381 -0.0343 9.2021 0.2257 8.5601 1.4287C7.6851 3.0967 7.4661 4.8607 7.4661 6.5557C7.4661 11.7917 10.8291 15.8387 15.7241 16.7137ZM13.1541 22.5377C10.1871 19.9127 6.2901 18.4637 1.9021 18.4637C0.3841 18.4637 -0.3539 19.5307 0.1651 20.9797C2.0661 26.4207 7.1791 30.6727 13.3861 32.0397C13.2361 31.6027 13.1541 31.1107 13.1541 30.6177Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.540306805398586 31.0078125"
          className={className}
        >
          <path
            d="              M15.2323 29.545C15.2323 30.393 15.9153 31.008 16.7903 31.008C24.2553 31.008 31.1463 26.441 33.4023 19.988C33.8123 18.854 33.2923 18.061 32.0753 18.061C25.9373 18.061 21.0153 21.068 18.3493 25.607V15.613C23.2303 14.916 26.4433 10.965 26.4433 6.016C26.4433 4.402 26.1833 2.748 25.4173 1.162C24.9523 0.232 23.8313 0.041 23.0933 0.807L20.3043 3.65L17.9253 0.574C17.3243 -0.191 16.2573 -0.191 15.6693 0.574L13.2903 3.65L10.5013 0.807C9.7633 0.041 8.6423 0.232 8.1773 1.162C7.4113 2.762 7.1523 4.416 7.1523 6.016C7.1523 10.965 10.3653 14.916 15.2323 15.613ZM13.0173 22.887C10.2423 19.92 6.2363 18.061 1.4643 18.061C0.2473 18.061 -0.2717 18.854 0.1383 19.988C2.0113 25.375 7.1113 29.49 13.1813 30.652C13.0853 30.311 13.0173 29.928 13.0173 29.545Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.537622683777464 31.8076171875"
          className={className}
        >
          <path
            d="              M15.492 30.1119C15.492 31.0829 16.284 31.8079 17.296 31.8079C24.966 31.8079 32.048 27.1319 34.386 20.5009C34.851 19.2159 34.222 18.2589 32.841 18.2589C26.88 18.2589 21.945 21.0339 19.087 25.4369V16.1939C23.982 15.4009 27.263 11.3959 27.263 6.2959C27.263 4.6279 27.044 2.9189 26.224 1.2919C25.677 0.2389 24.365 -0.0071 23.503 0.8679L20.865 3.5889L18.609 0.6769C17.925 -0.2261 16.667 -0.2261 15.984 0.6769L13.728 3.5889L11.075 0.8679C10.228 -0.0071 8.943 0.2259 8.382 1.2919C7.562 2.9329 7.316 4.6419 7.316 6.2959C7.316 11.3959 10.611 15.4009 15.492 16.1939ZM13.085 22.7019C10.214 19.9129 6.263 18.2589 1.697 18.2589C0.316 18.2589 -0.313 19.2159 0.152 20.5009C2.038 25.9289 7.152 30.1119 13.29 31.3839C13.167 30.9869 13.085 30.5499 13.085 30.1119Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.411356726276303 29.04248046875"
          className={className}
        >
          <path
            d="              M14.3785 28.2357C14.3785 28.7147 14.7345 29.0427 15.2125 29.0427C22.1165 29.0427 28.2965 24.6807 30.3335 18.7067C30.5525 18.0637 30.3065 17.6537 29.6365 17.6537C23.1965 17.6537 18.1655 21.3997 16.0605 26.5137V14.0577C20.8725 13.6617 24.0035 9.9297 24.0035 5.2537C24.0035 3.7627 23.7025 2.2457 23.0465 0.7557C22.8275 0.2627 22.2535 0.1807 21.8435 0.6047L18.5755 3.9137L15.8005 0.3177C15.4865 -0.1063 14.9525 -0.1063 14.6245 0.3177L11.8625 3.9137L8.5955 0.6047C8.1855 0.1807 7.6115 0.2627 7.3925 0.7557C6.7365 2.2457 6.4215 3.7627 6.4215 5.2537C6.4215 9.9297 9.5665 13.6617 14.3785 14.0577ZM12.7785 23.8197C10.2635 20.1147 5.9565 17.6537 0.7755 17.6537C0.1055 17.6537 -0.1405 18.0637 0.0775 18.7067C1.8685 24.0117 6.9005 28.0447 12.8615 28.8507C12.8195 28.6737 12.7785 28.4407 12.7785 28.2357Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.328755146127584 30.0439453125"
          className={className}
        >
          <path
            d="              M14.9271 28.8679C14.9271 29.5649 15.4741 30.0439 16.1851 30.0439C23.4041 30.0439 30.0341 25.6139 32.2081 19.3659C32.5501 18.4229 32.1541 17.7939 31.1551 17.7939C24.7301 17.7939 19.8491 21.1979 17.4561 25.9009V14.8959C22.3101 14.3209 25.4271 10.4249 25.4271 5.6669C25.4271 4.1359 25.1401 2.5359 24.4431 0.9909C24.0871 0.2389 23.1851 0.1029 22.5831 0.7179L19.6161 3.7389L17.0871 0.4719C16.6091 -0.1571 15.7611 -0.1571 15.2821 0.4719L12.7531 3.7389L9.7861 0.7179C9.1851 0.1029 8.2961 0.2259 7.9411 0.9909C7.2301 2.5499 6.9431 4.1359 6.9431 5.6669C6.9431 10.4249 10.0601 14.3209 14.9271 14.8959ZM12.9311 23.1119C10.2791 19.9129 6.2041 17.7939 1.1731 17.7939C0.1751 17.7939 -0.2209 18.4229 0.1201 19.3659C1.9661 24.6979 7.0521 28.7319 13.0541 29.7569C12.9721 29.4829 12.9311 29.1689 12.9311 28.8679Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.6534266031654 29.50390625"
          className={className}
        >
          <path
            d="              M14.7533 28.479C14.7533 29.094 15.2323 29.504 15.8473 29.504C22.9153 29.504 29.4093 25.143 31.5423 19.018C31.8433 18.184 31.5293 17.65 30.6403 17.65C24.0233 17.65 19.1563 21.328 16.9543 26.127V14.492C21.8083 13.986 24.8703 10.131 24.8703 5.482C24.8703 3.978 24.5563 2.434 23.9003 0.889C23.5993 0.232 22.8203 0.137 22.3003 0.67L19.2383 3.787L16.6263 0.41C16.2023 -0.137 15.4923 -0.137 15.0813 0.41L12.4703 3.787L9.3943 0.67C8.8743 0.137 8.0953 0.232 7.8083 0.889C7.1383 2.434 6.8243 3.978 6.8243 5.482C6.8243 10.131 9.8863 13.986 14.7533 14.492ZM12.8803 23.256C10.3103 19.92 6.1953 17.65 1.0133 17.65C0.1243 17.65 -0.1897 18.184 0.1113 19.018C1.9433 24.322 7.0293 28.314 12.9903 29.258C12.9213 29.025 12.8803 28.752 12.8803 28.479Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.86079650517751 30.46435546875"
          className={className}
        >
          <path
            d="              M15.0564 29.1656C15.0564 29.9176 15.6714 30.4646 16.4514 30.4646C23.7794 30.4646 30.5194 25.9796 32.7344 19.6366C33.1034 18.6106 32.6524 17.9136 31.5584 17.9136C25.2694 17.9136 20.3614 21.1406 17.8454 25.7616V15.2066C22.7124 14.5776 25.8704 10.6676 25.8704 5.8136C25.8704 4.2556 25.5974 2.6416 24.8594 1.0696C24.4624 0.2356 23.4644 0.0856 22.8084 0.7556L19.9104 3.7086L17.4494 0.5226C16.9294 -0.1744 15.9864 -0.1744 15.4524 0.5226L12.9924 3.7086L10.0934 0.7556C9.4374 0.0856 8.4524 0.2356 8.0424 1.0696C7.3184 2.6416 7.0314 4.2686 7.0314 5.8136C7.0314 10.6676 10.1894 14.5776 15.0564 15.2066ZM12.9644 23.0266C10.2714 19.9236 6.2244 17.9136 1.3024 17.9136C0.2084 17.9136 -0.2426 18.6106 0.1264 19.6366C1.9864 24.9956 7.0854 29.0566 13.1154 30.1496C13.0334 29.8356 12.9644 29.5076 12.9644 29.1656Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.779670828983246 28.4169921875"
          className={className}
        >
          <path
            d="              M13.8901 27.8973C13.8901 28.2123 14.0951 28.4173 14.3961 28.4173C21.0811 28.4173 26.8231 24.0693 28.7381 18.2993C28.8611 17.9033 28.7101 17.6433 28.3271 17.6433C22.1071 17.6433 16.8291 21.4993 14.9021 27.0913V13.4603C19.6321 13.2143 22.8861 9.6593 22.8861 4.9283C22.8861 3.4653 22.5721 2.0033 21.9431 0.5673C21.8201 0.2803 21.4911 0.2253 21.2321 0.4993L17.7181 4.0673L14.7381 0.1843C14.5461 -0.0617 14.2451 -0.0617 14.0541 0.1843L11.0601 4.0673L7.5601 0.4993C7.2861 0.2253 6.9721 0.2803 6.8491 0.5673C6.2201 2.0033 5.9061 3.4653 5.9061 4.9283C5.9061 9.6593 9.1591 13.2143 13.8901 13.4603ZM12.6731 24.5753C10.2261 20.3643 5.6461 17.6433 0.4501 17.6433C0.0811 17.6433 -0.0829 17.9033 0.0401 18.2993C1.7901 23.5773 6.7531 27.6783 12.7141 28.3073C12.6871 28.1843 12.6731 28.0343 12.6731 27.8973Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.941493431138134 28.095703125"
          className={className}
        >
          <path
            d="              M13.6288 27.7268C13.6288 27.9588 13.7658 28.0958 13.9708 28.0958C20.5328 28.0958 26.0708 23.7478 27.9158 18.0878C27.9978 17.8278 27.8748 17.6508 27.6428 17.6508C21.5448 17.6508 16.1308 21.5608 14.2988 27.4258V13.1528C18.9888 13.0018 22.2968 9.5298 22.2968 4.7848C22.2968 3.3088 21.9828 1.8868 21.3808 0.4788C21.2848 0.2868 21.1078 0.2598 20.9298 0.4648L17.2798 4.1558L14.1898 0.1228C14.0528 -0.0412 13.8888 -0.0412 13.7518 0.1228L10.6618 4.1558L7.0118 0.4648C6.8338 0.2598 6.6428 0.2868 6.5608 0.4788C5.9588 1.8868 5.6448 3.3088 5.6448 4.7848C5.6448 9.5298 8.9528 13.0018 13.6288 13.1528ZM12.6038 24.9648C10.1968 20.4938 5.4938 17.6508 0.2988 17.6508C0.0668 17.6508 -0.0562 17.8278 0.0258 18.0878C1.7478 23.3648 6.6698 27.4938 12.6308 28.0278C12.6168 27.9458 12.6038 27.8228 12.6038 27.7268Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
