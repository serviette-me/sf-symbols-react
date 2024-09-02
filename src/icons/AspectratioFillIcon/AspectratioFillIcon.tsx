import { IconProps } from "../../types"

export default function AspectratioFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 27.111328125"
          className={className}
        >
          <path
            d="              M25.4977 12.3733C25.4977 9.9123 24.0627 8.4763 21.6017 8.4763L-0.0003 8.4903V5.3592C-0.0003 1.9683 1.9827 0.0003 5.3597 0.0003H27.6717C31.0487 0.0003 33.0317 1.9683 33.0317 5.3592V21.7523C33.0317 25.1293 31.0487 27.1113 27.6717 27.1113H25.4977ZM21.9437 12.9332V27.1113H16.2017V12.0173H21.0407C21.6287 12.0173 21.9437 12.2913 21.9437 12.9332ZM5.3597 27.1113C1.9827 27.1113 -0.0003 25.1293 -0.0003 21.7523V12.0173H12.6597V27.1113Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 26.140625"
          className={className}
        >
          <path
            d="              M25.0337 11.6897C25.0337 9.3787 23.7347 8.0667 21.3827 8.0667L-0.0003 8.0797V4.7987C-0.0003 1.6957 1.7087 -0.0003 4.8267 -0.0003H27.8087C30.9397 -0.0003 32.6347 1.6957 32.6347 4.7987V21.3417C32.6347 24.4457 30.9397 26.1407 27.8087 26.1407H25.0337ZM22.2847 12.0857V26.1407H16.4887V10.8277H21.0407C21.8337 10.8277 22.2847 11.2517 22.2847 12.0857ZM4.8267 26.1407C1.7087 26.1407 -0.0003 24.4457 -0.0003 21.3417V10.8277H13.7407V26.1407H13.7407Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 26.66015625"
          className={className}
        >
          <path
            d="              M25.2797 12.0585C25.2797 9.6665 23.8987 8.2855 21.4927 8.2855L-0.0003 8.2985V5.0995C-0.0003 1.8455 1.8597 -0.0005 5.1137 -0.0005H27.7267C30.9937 -0.0005 32.8397 1.8455 32.8397 5.0995V21.5605C32.8397 24.8145 30.9937 26.6605 27.7267 26.6605H25.2797ZM22.1077 12.5375V26.6605H16.3377V11.4705H21.0407C21.7247 11.4705 22.1077 11.8125 22.1077 12.5375ZM5.1137 26.6605C1.8597 26.6605 -0.0003 24.8145 -0.0003 21.5605V11.4705H13.1657V26.6605H13.1657Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.7734375"
          className={className}
        >
          <path
            d="              M24.5817 10.7321C24.5817 8.6131 23.4067 7.4511 21.2737 7.4511H-0.0003V3.9921C-0.0003 1.3531 1.3677 0.0001 4.0337 0.0001H27.9867C30.6657 0.0001 32.0197 1.3671 32.0197 3.9921V20.7671C32.0197 23.3921 30.6657 24.7601 27.9867 24.7601H24.5817ZM23.0647 10.8961V24.7601H24.5817V24.7731H23.0647V24.7601H16.8847V8.9821H21.1637C22.3537 8.9821 23.0647 9.6931 23.0647 10.8961ZM4.0337 24.7601C1.3677 24.7601 -0.0003 23.4061 -0.0003 20.7671V8.9821H15.3537V24.7601H16.8847V24.7731H15.3537V24.7601Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.525390625"
          className={className}
        >
          <path
            d="              M24.7457 11.2523C24.7457 9.0233 23.5297 7.8063 21.2597 7.8063H-0.0003V4.4293C-0.0003 1.5043 1.5317 0.0003 4.4847 0.0003H27.9047C30.8577 0.0003 32.3887 1.5173 32.3887 4.4293V21.0823C32.3887 23.9943 30.8577 25.5113 27.9047 25.5113H24.7457ZM22.5037 11.5393V25.5113H24.7457V25.5253H22.5037V25.5113H16.6657V10.0493H21.0407C21.9707 10.0493 22.5037 10.5953 22.5037 11.5393ZM4.4847 25.5113C1.5317 25.5113 -0.0003 23.9943 -0.0003 21.0823V10.0493H14.4237V25.5113H16.6657V25.5253H14.4237V25.5113Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.18359375"
          className={className}
        >
          <path
            d="              M24.5817 11.0192C24.5817 8.8322 23.4067 7.6702 21.1777 7.6702H-0.0003V4.2382C-0.0003 1.4222 1.4357 0.0002 4.2927 0.0002H27.9457C30.8167 0.0002 32.2387 1.4222 32.2387 4.2382V20.9452C32.2387 23.7622 30.8167 25.1702 27.9457 25.1702H24.5817ZM22.6267 11.2382V25.1702H24.5817V25.1832H22.6267V25.1702H16.7757V9.6252H21.0407C22.0387 9.6252 22.6267 10.2262 22.6267 11.2382ZM4.2927 25.1702C1.4357 25.1702 -0.0003 23.7622 -0.0003 20.9452V9.6252H14.8207V25.1702H16.7757V25.1832H14.8207V25.1702Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 25.78515625"
          className={className}
        >
          <path
            d="              M24.8687 11.443C24.8687 9.174 23.6117 7.93 21.3147 7.93H-0.0003V4.594C-0.0003 1.586 1.6137 0 4.6347 0H27.8637C30.8847 0 32.4977 1.6 32.4977 4.594V21.191C32.4977 24.186 30.8847 25.785 27.8637 25.785H24.8687ZM22.4087 11.771V25.785H16.5977V10.391H21.0407C21.9157 10.391 22.4087 10.883 22.4087 11.771ZM4.6347 25.785C1.6137 25.785 -0.0003 24.199 -0.0003 21.191V10.391H14.1367V25.785H14.1367Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.2265625"
          className={className}
        >
          <path
            d="              M24.5957 10.3637C24.5957 8.3397 23.4197 7.1507 21.3827 7.1507H-0.0003V3.6777C-0.0003 1.2577 1.2717 -0.0003 3.6917 -0.0003H28.0407C30.4607 -0.0003 31.7187 1.2847 31.7187 3.6777V20.5217C31.7187 22.9137 30.4607 24.1997 28.0407 24.1997H24.5957ZM23.6387 10.4457V24.1997H24.5957V24.2267H23.6387V24.1997H17.0347V8.1207H21.3147C22.7777 8.1207 23.6387 8.9687 23.6387 10.4457ZM3.6917 24.1997C1.2717 24.1997 -0.0003 22.9417 -0.0003 20.5217V8.1207H16.0647V24.1997H17.0347V24.2267H16.0647V24.1997Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.953125"
          className={className}
        >
          <path
            d="              M24.6097 10.172C24.6097 8.189 23.4197 7 21.4377 7H-0.0003V3.514C-0.0003 1.217 1.2167 0 3.5137 0H28.0687C30.3517 0 31.5687 1.258 31.5687 3.514V20.412C31.5687 22.668 30.3517 23.926 28.0687 23.926H24.6097ZM23.9257 10.213V23.926H24.6097V23.953H23.9257V23.926H17.1037V7.684H21.3967C22.9957 7.684 23.9257 8.613 23.9257 10.213ZM3.5137 23.926C1.2167 23.926 -0.0003 22.709 -0.0003 20.412V7.684H16.4337V23.926H17.1037V23.953H16.4337V23.926Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}