import { IconProps } from "../../types"
import React from "react"

export default function ChevronCompactLeftIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.486328125 26.400390625"
          className={className}
        >
          <path
            d="              M4.9907 24.7595C5.4417 25.6895 6.2617 26.4005 7.4097 26.4005C9.3107 26.3865 10.4867 25.0195 10.4867 23.5155C10.4867 22.6545 9.9667 21.5605 9.4887 20.5625L6.0017 13.2075L9.4887 5.8375C9.9667 4.8535 10.4867 3.7465 10.4867 2.8985C10.4867 1.3945 9.3107 0.0275 7.4097 0.0005C6.2617 0.0005 5.4417 0.7105 4.9907 1.6405L0.8207 10.4315C0.2867 11.5805 -0.0003 12.1545 -0.0003 13.2075C-0.0003 14.2595 0.2867 14.8345 0.8207 15.9825Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.640625 25.375"
          className={className}
        >
          <path
            d="              M4.5937 24.1313C4.9217 24.8553 5.5777 25.3753 6.3847 25.3753C7.7517 25.3753 8.6407 24.3903 8.6407 23.2423C8.6407 22.5993 8.2717 21.7933 7.9567 21.1233L4.3617 12.6873L7.9567 4.2523C8.2717 3.5823 8.6407 2.7613 8.6407 2.1333C8.6407 0.9843 7.7517 0.0003 6.3847 0.0003C5.5777 0.0003 4.9217 0.5193 4.5937 1.2443L0.6837 10.2953C0.2867 11.1833 -0.0003 11.8533 -0.0003 12.6873C-0.0003 13.5213 0.2867 14.1773 0.6837 15.0663Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.611328125 25.921875"
          className={className}
        >
          <path
            d="              M4.7987 24.459C5.1957 25.293 5.9337 25.922 6.9317 25.922C8.5727 25.908 9.6117 24.719 9.6117 23.379C9.6117 22.627 9.1597 21.67 8.7777 20.822L5.2227 12.961L8.7777 5.086C9.1597 4.252 9.6117 3.281 9.6117 2.529C9.6117 1.203 8.5727 0.014 6.9317 0C5.9337 0 5.1957 0.615 4.7987 1.463L0.7517 10.363C0.2867 11.389 -0.0003 12.018 -0.0003 12.961C-0.0003 13.904 0.2867 14.519 0.7517 15.545Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6.193359375 23.666015625"
          className={className}
        >
          <path
            d="              M4.2657 23.0236C4.4297 23.4336 4.7847 23.6656 5.1407 23.6656C5.7427 23.6656 6.1937 23.2286 6.1937 22.6406C6.1937 22.3266 6.0297 21.9436 5.9337 21.6696L2.0097 11.8266L5.9337 1.9956C6.0297 1.7226 6.1937 1.3266 6.1937 1.0256C6.1937 0.4376 5.7427 -0.0004 5.1407 -0.0004C4.7847 -0.0004 4.4297 0.2326 4.2657 0.6426L0.3967 10.3496C0.2187 10.8006 -0.0003 11.3886 -0.0003 11.8266C-0.0003 12.2776 0.2187 12.8516 0.3967 13.3166Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.451171875 24.74609375"
          className={className}
        >
          <path
            d="              M4.3477 23.7345C4.5937 24.3355 5.1267 24.7465 5.7427 24.7465C6.7407 24.7325 7.4517 24.0075 7.4517 23.0785C7.4517 22.5855 7.1777 21.9575 6.9867 21.4925L3.2947 12.3735L6.9867 3.2535C7.1777 2.7895 7.4517 2.1465 7.4517 1.6545C7.4517 0.7385 6.7407 0.0005 5.7427 0.0005C5.1267 0.0005 4.5937 0.3965 4.3477 0.9985L0.6017 10.2405C0.3007 10.9515 -0.0003 11.6895 -0.0003 12.3735C-0.0003 13.0565 0.3007 13.7815 0.6017 14.5055Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6.794921875 24.376953125"
          className={className}
        >
          <path
            d="              M4.2107 23.5018C4.4157 24.0348 4.8807 24.3768 5.3727 24.3768C6.1797 24.3768 6.7947 23.7888 6.7947 22.9828C6.7947 22.5728 6.5627 22.0388 6.4257 21.6838L2.6937 12.1817L6.4257 2.6797C6.5627 2.3238 6.7947 1.7778 6.7947 1.3807C6.7947 0.5877 6.1797 -0.0003 5.3727 -0.0003C4.8807 -0.0003 4.4157 0.3278 4.2107 0.8618L0.5467 10.1858C0.3007 10.8148 -0.0003 11.5798 -0.0003 12.1817C-0.0003 12.7828 0.3007 13.5488 0.5467 14.1778Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.970703125 25.01953125"
          className={className}
        >
          <path
            d="              M4.4567 23.9122C4.7437 24.5682 5.3187 25.0192 6.0157 25.0192C7.1777 25.0192 7.9707 24.1852 7.9707 23.1602C7.9707 22.5992 7.6427 21.8882 7.4097 21.3422L3.7457 12.5102L7.4097 3.6912C7.6427 3.1312 7.9707 2.4202 7.9707 1.8732C7.9707 0.8472 7.1777 0.0132 6.0157 0.0002C5.3187 0.0002 4.7437 0.4512 4.4567 1.1212L0.6287 10.2672C0.3007 11.0602 -0.0003 11.7712 -0.0003 12.5102C-0.0003 13.2622 0.3007 13.9592 0.6287 14.7522Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5.400390625 22.736328125"
          className={className}
        >
          <path
            d="              M4.3617 22.3944C4.4567 22.6404 4.6617 22.7364 4.8397 22.7364C5.1547 22.7364 5.4007 22.5034 5.4007 22.1624C5.4007 22.0114 5.3187 21.8064 5.2637 21.6424L1.0937 11.3614L5.2637 1.0804C5.3187 0.9294 5.4007 0.7114 5.4007 0.5604C5.4007 0.2324 5.1547 0.0004 4.8397 0.0004C4.6617 0.0004 4.4567 0.0954 4.3617 0.3414L0.2047 10.5414C0.1097 10.8004 -0.0003 11.1284 -0.0003 11.3614C-0.0003 11.6074 0.1097 11.9214 0.2047 12.1814Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4.990234375 22.2578125"
          className={className}
        >
          <path
            d="              M4.4027 22.0663C4.4707 22.2303 4.6077 22.2573 4.6757 22.2573C4.8677 22.2573 4.9907 22.1343 4.9907 21.9293C4.9907 21.8473 4.9627 21.7383 4.9217 21.6423L0.6287 11.1293L4.9217 0.6293C4.9627 0.5193 4.9907 0.4103 4.9907 0.3283C4.9907 0.1363 4.8677 0.0003 4.6757 0.0003C4.6077 0.0003 4.4707 0.0273 4.4027 0.1913L0.1097 10.6503C0.0407 10.8003 -0.0003 11.0063 -0.0003 11.1293C-0.0003 11.2653 0.0407 11.4573 0.1097 11.6073Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
