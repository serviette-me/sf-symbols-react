import { IconProps } from "../../types"

export default function DSquareFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.3907 20.0023C8.5587 20.0023 7.6567 19.0723 7.6567 17.2133V9.8852C7.6567 8.0523 8.5727 7.1093 10.3907 7.1093H13.9457C17.9377 7.1093 20.1797 9.4332 20.1797 13.5623C20.1797 17.6773 17.9377 20.0023 13.9457 20.0023ZM12.2637 16.4613H13.1117C14.6427 16.4613 15.2577 15.6403 15.2577 13.5623C15.2577 11.5113 14.6427 10.6642 13.1117 10.6642H12.2637Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM9.6527 19.4417C8.3677 19.4417 7.7247 18.7167 7.7247 17.4047V8.5997C7.7247 7.3007 8.3807 6.5627 9.6527 6.5627H13.2207C17.2407 6.5627 19.4687 8.8727 19.4687 12.9887C19.4687 17.1307 17.2267 19.4417 13.2207 19.4417ZM11.1157 16.7887H12.6877C14.8207 16.7887 15.8727 15.5997 15.8727 13.0017C15.8727 10.4727 14.8207 9.2147 12.6877 9.2147H11.1157Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM10.0347 19.7425C8.4627 19.7425 7.6977 18.9085 7.6977 17.3085V9.2835C7.6977 7.6975 8.4767 6.8635 10.0347 6.8635H13.6037C17.6097 6.8635 19.8377 9.1735 19.8377 13.3025C19.8377 17.4315 17.5957 19.7425 13.6037 19.7425ZM11.7167 16.6245H12.9067C14.7247 16.6245 15.5447 15.6265 15.5447 13.3165C15.5447 11.0335 14.7247 9.9945 12.9067 9.9945H11.7167Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM8.6137 18.5665C8.0667 18.5665 7.7657 18.1695 7.7657 17.5825V6.9725C7.7657 6.3845 8.0667 5.9885 8.6137 5.9885H12.2227C16.0507 5.9885 18.2387 8.2855 18.2387 12.2365C18.2387 16.3105 16.0237 18.5665 12.2227 18.5665ZM9.4747 17.1715H12.0317C14.8337 17.1715 16.4607 15.5175 16.4607 12.2635C16.4607 9.1465 14.8207 7.3825 12.0317 7.3825H9.4747Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM9.1737 19.0723C8.2437 19.0723 7.7657 18.4843 7.7657 17.5273V7.7653C7.7657 6.8083 8.2437 6.2073 9.1737 6.2073H12.7557C16.7887 6.2073 19.0177 8.5043 19.0177 12.6193C19.0177 16.7753 16.7617 19.0723 12.7557 19.0723ZM10.3907 16.9943H12.4007C14.9437 16.9943 16.2697 15.5583 16.2697 12.6463C16.2697 9.7893 14.9297 8.2853 12.4007 8.2853H10.3907Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM8.9007 18.8535C8.1757 18.8535 7.7927 18.3475 7.7927 17.5815V7.2875C7.7927 6.5215 8.1757 6.0155 8.9007 6.0155H12.4957C16.5427 6.0155 18.7717 8.2855 18.7717 12.4005C18.7717 16.5705 16.5017 18.8535 12.4957 18.8535ZM9.9807 17.1035H12.2497C15.0117 17.1035 16.5017 15.5445 16.5017 12.4415C16.5017 9.4065 14.9977 7.7655 12.2497 7.7655H9.9807Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM9.3787 19.223C8.2987 19.223 7.7517 18.58 7.7517 17.473V8.121C7.7517 7.014 8.2987 6.371 9.3787 6.371H12.9607C16.9807 6.371 19.2087 8.654 19.2087 12.783C19.2087 16.926 16.9667 19.223 12.9607 19.223ZM10.7047 16.912H12.5237C14.8887 16.912 16.1057 15.572 16.1057 12.797C16.1057 10.076 14.8747 8.695 12.5237 8.695H10.7047Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM8.2437 18.1704C7.9297 18.1704 7.7517 17.9374 7.7517 17.5824V6.5354C7.7517 6.1794 7.9297 5.9474 8.2437 5.9474H11.8677C15.3947 5.9474 17.5407 8.2444 17.5407 12.0044C17.5407 15.9554 15.3947 18.1704 11.8677 18.1704ZM8.7907 17.2404H11.7437C14.6157 17.2404 16.4197 15.4764 16.4197 12.0314C16.4197 8.7774 14.6017 6.8774 11.7437 6.8774H8.7907Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM8.0527 17.951C7.8477 17.951 7.7387 17.801 7.7387 17.568V6.316C7.7387 6.084 7.8477 5.934 8.0527 5.934H11.6757C15.0527 5.934 17.1857 8.23 17.1857 11.881C17.1857 15.777 15.0667 17.951 11.6757 17.951ZM8.4357 17.281H11.5937C14.4927 17.281 16.3927 15.449 16.3927 11.908C16.3927 8.586 14.4787 6.604 11.5937 6.604H8.4357Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
