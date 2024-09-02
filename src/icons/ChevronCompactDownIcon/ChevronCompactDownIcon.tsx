import { IconProps } from "../../types"

export default function ChevronCompactDownIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.38671875 10.486328125"
          className={className}
        >
          <path
            d="              M1.6547 5.5094L10.4317 9.6664C11.5667 10.1994 12.1547 10.4864 13.1937 10.4864C14.2327 10.4864 14.8207 10.1994 15.9547 9.6664L24.7327 5.5094C25.6897 5.0454 26.3867 4.2244 26.3867 3.0894C26.3867 1.1754 24.9927 0.0004 23.5017 0.0004C22.6267 0.0004 21.5467 0.5194 20.5627 0.9984L13.1937 4.4984L5.8377 0.9984C4.8397 0.5194 3.7597 0.0004 2.8847 0.0004C1.4087 0.0004 -0.0003 1.1754 -0.0003 3.0894C-0.0003 4.2244 0.7107 5.0454 1.6547 5.5094Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.388671875 8.626953125"
          className={className}
        >
          <path
            d="              M1.2577 4.047L10.3087 7.943C11.1977 8.34 11.8677 8.627 12.6877 8.627C13.5217 8.627 14.1917 8.34 15.0667 7.943L24.1307 4.047C24.8687 3.719 25.3887 3.063 25.3887 2.242C25.3887 0.889 24.3907 0 23.2427 0C22.6137 0 21.7927 0.369 21.1227 0.684L12.6877 4.279L4.2657 0.684C3.5957 0.369 2.7887 0 2.1327 0C0.9977 0 -0.0003 0.889 -0.0003 2.242C-0.0003 3.063 0.5197 3.719 1.2577 4.047Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.921875 9.611328125"
          className={className}
        >
          <path
            d="              M1.4627 4.8125L10.3767 8.8455C11.4027 9.3245 12.0177 9.6115 12.9607 9.6115C13.8907 9.6115 14.5197 9.3245 15.5447 8.8455L24.4457 4.8125C25.2927 4.4155 25.9217 3.6775 25.9217 2.6795C25.9217 1.0395 24.7047 -0.0005 23.3787 -0.0005C22.6267 -0.0005 21.6697 0.4515 20.8227 0.8335L12.9607 4.3885L5.0857 0.8335C4.2517 0.4515 3.2947 -0.0005 2.5297 -0.0005C1.2167 -0.0005 -0.0003 1.0395 -0.0003 2.6795C-0.0003 3.6775 0.6157 4.4155 1.4627 4.8125Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.6796875 6.166015625"
          className={className}
        >
          <path
            d="              M0.6427 1.9144L10.3497 5.7554C10.8147 5.9474 11.3887 6.1664 11.8397 6.1664C12.2907 6.1664 12.8657 5.9474 13.3297 5.7554L23.0367 1.9144C23.4337 1.7504 23.6797 1.4084 23.6797 1.0524C23.6797 0.4514 23.2427 0.0004 22.6407 0.0004C22.3397 0.0004 21.9297 0.1644 21.6697 0.2594L11.8397 4.1564L1.9957 0.2594C1.7367 0.1644 1.3397 0.0004 1.0387 0.0004C0.4377 0.0004 -0.0003 0.4514 -0.0003 1.0524C-0.0003 1.4084 0.2457 1.7504 0.6427 1.9144Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.74609375 7.4375"
          className={className}
        >
          <path
            d="              M1.0117 3.1037L10.2407 6.8497C10.9647 7.1507 11.6897 7.4377 12.3727 7.4377C13.0567 7.4377 13.7947 7.1507 14.5057 6.8497L23.7347 3.1037C24.3357 2.8577 24.7457 2.3247 24.7457 1.7087C24.7457 0.7107 24.0077 -0.0003 23.0777 -0.0003C22.5997 -0.0003 21.9567 0.2737 21.4927 0.4647L12.3727 4.1567L3.2537 0.4647C2.7887 0.2737 2.1597 -0.0003 1.6547 -0.0003C0.7387 -0.0003 -0.0003 0.7107 -0.0003 1.7087C-0.0003 2.3247 0.4097 2.8577 1.0117 3.1037Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.376953125 6.78125"
          className={className}
        >
          <path
            d="              M0.8617 2.5835L10.1997 6.2345C10.8277 6.4805 11.5797 6.7815 12.1957 6.7815C12.7967 6.7815 13.5627 6.4805 14.1917 6.2345L23.5157 2.5835C24.0347 2.3785 24.3767 1.9145 24.3767 1.4085C24.3767 0.6015 23.7887 -0.0005 22.9957 -0.0005C22.5857 -0.0005 22.0387 0.2325 21.6977 0.3555L12.1957 4.0875L2.6797 0.3555C2.3377 0.2325 1.8047 -0.0005 1.3807 -0.0005C0.5877 -0.0005 -0.0003 0.6015 -0.0003 1.4085C-0.0003 1.9145 0.3417 2.3785 0.8617 2.5835Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.01953125 7.970703125"
          className={className}
        >
          <path
            d="              M1.1207 3.5138L10.2677 7.3278C11.0607 7.6698 11.7717 7.9708 12.5097 7.9708C13.2477 7.9708 13.9587 7.6698 14.7517 7.3278L23.8987 3.5138C24.5687 3.2398 25.0197 2.6528 25.0197 1.9548C25.0197 0.7928 24.1717 -0.0002 23.1597 -0.0002C22.5997 -0.0002 21.8887 0.3278 21.3277 0.5738L12.5097 4.2108L3.6917 0.5738C3.1307 0.3278 2.4197 -0.0002 1.8597 -0.0002C0.8477 -0.0002 -0.0003 0.7928 -0.0003 1.9548C-0.0003 2.6528 0.4517 3.2398 1.1207 3.5138Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.736328125 5.373046875"
          className={className}
        >
          <path
            d="              M0.3417 1.0389L10.5547 5.1409C10.8147 5.2499 11.1157 5.3729 11.3747 5.3729C11.6207 5.3729 11.9357 5.2499 12.1957 5.1409L22.3947 1.0389C22.6267 0.9429 22.7367 0.7519 22.7367 0.5739C22.7367 0.2599 22.5037 -0.0001 22.1757 -0.0001C22.0257 -0.0001 21.7927 0.0959 21.6567 0.1509L11.3747 4.2789L1.0937 0.1509C0.9437 0.0959 0.7247 -0.0001 0.5747 -0.0001C0.2327 -0.0001 -0.0003 0.2599 -0.0003 0.5739C-0.0003 0.7519 0.1097 0.9429 0.3417 1.0389Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.2578125 4.962890625"
          className={className}
        >
          <path
            d="              M0.1917 0.6018L10.6507 4.8258C10.8007 4.8948 10.9787 4.9628 11.1287 4.9628C11.2797 4.9628 11.4567 4.8948 11.6077 4.8258L22.0667 0.6018C22.2167 0.5328 22.2577 0.4098 22.2577 0.3278C22.2577 0.1508 22.1347 -0.0002 21.9297 -0.0002C21.8477 -0.0002 21.7247 0.0548 21.6427 0.0818L11.1287 4.3338L0.6287 0.0818C0.5467 0.0548 0.4097 -0.0002 0.3277 -0.0002C0.1367 -0.0002 -0.0003 0.1508 -0.0003 0.3278C-0.0003 0.4098 0.0407 0.5328 0.1917 0.6018Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
