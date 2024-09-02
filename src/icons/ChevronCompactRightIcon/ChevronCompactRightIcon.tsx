import { IconProps } from "../../types"

export default function ChevronCompactRightIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.486328125 26.400390625"
          className={className}
        >
          <path
            d="              M5.5097 24.7595L9.6657 15.9825C10.1997 14.8345 10.4867 14.2595 10.4867 13.2075C10.4867 12.1545 10.1997 11.5805 9.6657 10.4315L5.5097 1.6405C5.0587 0.7105 4.2247 0.0005 3.0897 0.0005C1.1757 0.0275 -0.0003 1.3945 -0.0003 2.8985C-0.0003 3.7465 0.5197 4.8535 0.9977 5.8375L4.4847 13.2075L0.9977 20.5625C0.5197 21.5605 -0.0003 22.6545 -0.0003 23.5155C-0.0003 25.0195 1.1757 26.3865 3.0897 26.4005C4.2247 26.4005 5.0587 25.6895 5.5097 24.7595Z"
            fill={color}
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
            d="              M4.0467 24.1313L7.9567 15.0663C8.3397 14.1773 8.6407 13.5213 8.6407 12.6873C8.6407 11.8533 8.3397 11.1833 7.9567 10.2953L4.0467 1.2443C3.7187 0.5193 3.0627 0.0003 2.2427 0.0003C0.8887 0.0003 -0.0003 0.9843 -0.0003 2.1333C-0.0003 2.7613 0.3687 3.5823 0.6697 4.2523L4.2797 12.6873L0.6697 21.1233C0.3687 21.7933 -0.0003 22.5993 -0.0003 23.2423C-0.0003 24.3903 0.8887 25.3753 2.2427 25.3753C3.0627 25.3753 3.7187 24.8553 4.0467 24.1313Z"
            fill={color}
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
            d="              M4.8127 24.459L8.8597 15.545C9.3247 14.519 9.6117 13.904 9.6117 12.961C9.6117 12.018 9.3247 11.389 8.8597 10.363L4.8127 1.463C4.4157 0.615 3.6777 0 2.6937 0C1.0387 0.014 -0.0003 1.203 -0.0003 2.529C-0.0003 3.281 0.4517 4.252 0.8477 5.086L4.3887 12.961L0.8477 20.822C0.4517 21.67 -0.0003 22.627 -0.0003 23.379C-0.0003 24.719 1.0387 25.908 2.6937 25.922C3.6777 25.922 4.4157 25.293 4.8127 24.459Z"
            fill={color}
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
            d="              M1.9137 23.0236L5.7837 13.3166C5.9747 12.8516 6.1937 12.2776 6.1937 11.8266C6.1937 11.3886 5.9747 10.8006 5.7837 10.3496L1.9137 0.6426C1.7637 0.2326 1.4087 -0.0004 1.0387 -0.0004C0.4517 -0.0004 -0.0003 0.4376 -0.0003 1.0256C-0.0003 1.3266 0.1637 1.7226 0.2597 1.9956L4.1837 11.8266L0.2597 21.6696C0.1637 21.9436 -0.0003 22.3266 -0.0003 22.6406C-0.0003 23.2286 0.4517 23.6656 1.0387 23.6656C1.4087 23.6656 1.7637 23.4336 1.9137 23.0236Z"
            fill={color}
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
            d="              M3.1037 23.7345L6.8637 14.5055C7.1637 13.7815 7.4517 13.0565 7.4517 12.3735C7.4517 11.6895 7.1637 10.9515 6.8637 10.2405L3.1037 0.9985C2.8577 0.3965 2.3247 0.0005 1.7087 0.0005C0.7107 0.0005 -0.0003 0.7385 -0.0003 1.6545C-0.0003 2.1465 0.2737 2.7895 0.4787 3.2535L4.1567 12.3735L0.4787 21.4925C0.2737 21.9575 -0.0003 22.5855 -0.0003 23.0785C-0.0003 24.0075 0.7107 24.7325 1.7087 24.7465C2.3247 24.7465 2.8577 24.3355 3.1037 23.7345Z"
            fill={color}
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
            d="              M2.5837 23.5018L6.2477 14.1778C6.4937 13.5488 6.7947 12.7828 6.7947 12.1817C6.7947 11.5798 6.4937 10.8148 6.2477 10.1858L2.5837 0.8618C2.3787 0.3278 1.9137 -0.0003 1.4087 -0.0003C0.6017 -0.0003 -0.0003 0.5877 -0.0003 1.3807C-0.0003 1.7778 0.2327 2.3238 0.3557 2.6797L4.0877 12.1817L0.3557 21.6838C0.2327 22.0388 -0.0003 22.5728 -0.0003 22.9828C-0.0003 23.7888 0.6017 24.3768 1.4087 24.3768C1.9137 24.3768 2.3787 24.0348 2.5837 23.5018Z"
            fill={color}
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
            d="              M3.5137 23.9122L7.3277 14.7522C7.6697 13.9592 7.9707 13.2622 7.9707 12.5102C7.9707 11.7712 7.6697 11.0602 7.3277 10.2672L3.5137 1.1212C3.2267 0.4512 2.6387 0.0002 1.9417 0.0002C0.7927 0.0132 -0.0003 0.8472 -0.0003 1.8732C-0.0003 2.4202 0.3147 3.1312 0.5607 3.6912L4.2107 12.5102L0.5607 21.3422C0.3147 21.8882 -0.0003 22.5992 -0.0003 23.1602C-0.0003 24.1852 0.7927 25.0192 1.9417 25.0192C2.6387 25.0192 3.2267 24.5682 3.5137 23.9122Z"
            fill={color}
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
            d="              M1.0387 22.3944L5.1817 12.1814C5.2907 11.9214 5.4007 11.6074 5.4007 11.3614C5.4007 11.1284 5.2907 10.8004 5.1817 10.5414L1.0387 0.3414C0.9437 0.0954 0.7387 0.0004 0.5607 0.0004C0.2327 0.0004 -0.0003 0.2324 -0.0003 0.5604C-0.0003 0.7114 0.0817 0.9294 0.1367 1.0804L4.3067 11.3614L0.1367 21.6424C0.0817 21.8064 -0.0003 22.0114 -0.0003 22.1624C-0.0003 22.5034 0.2327 22.7364 0.5607 22.7364C0.7387 22.7364 0.9437 22.6404 1.0387 22.3944Z"
            fill={color}
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
            d="              M0.5877 22.0663L4.8807 11.6073C4.9497 11.4573 4.9907 11.2653 4.9907 11.1293C4.9907 11.0063 4.9497 10.8003 4.8807 10.6503L0.5877 0.1913C0.5197 0.0273 0.3967 0.0003 0.3147 0.0003C0.1367 0.0003 -0.0003 0.1363 -0.0003 0.3283C-0.0003 0.4103 0.0277 0.5193 0.0687 0.6293L4.3617 11.1293L0.0687 21.6423C0.0277 21.7383 -0.0003 21.8473 -0.0003 21.9293C-0.0003 22.1343 0.1367 22.2573 0.3147 22.2573C0.3967 22.2573 0.5197 22.2303 0.5877 22.0663Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
