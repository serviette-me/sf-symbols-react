import { IconProps } from "../../types"

export default function MSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM8.6547 20.2753C7.5607 20.2753 6.9587 19.6052 6.9587 18.4433V9.2282C6.9587 7.7793 7.9157 6.8363 9.4197 6.8363C10.7737 6.8363 11.6207 7.5063 12.0317 8.9142L13.6717 14.3423H13.7817L15.4217 8.9142C15.8187 7.5193 16.6527 6.8363 18.0337 6.8363C19.5367 6.8363 20.4937 7.7793 20.4937 9.2282V18.4433C20.4937 19.6193 19.8517 20.2753 18.7987 20.2753C17.7047 20.2753 17.0767 19.6052 17.0767 18.4433V12.8103H16.9257L15.2307 18.0193C14.9567 18.8533 14.4927 19.1953 13.6717 19.1953C12.8787 19.1953 12.4007 18.7993 12.1547 18.0063L10.5277 12.8103H10.3637V18.4433C10.3637 19.6193 9.7207 20.2753 8.6547 20.2753Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.8747 19.7007C7.0277 19.7007 6.5217 19.1547 6.5217 18.1977V8.1897C6.5217 7.0817 7.2737 6.3437 8.4217 6.3437C9.4337 6.3437 10.0897 6.8357 10.4177 7.8337L13.1247 15.2437H13.2067L15.9007 7.8337C16.2147 6.8357 16.8707 6.3437 17.8967 6.3437C19.0317 6.3437 19.7967 7.0817 19.7967 8.1897V18.1977C19.7967 19.1547 19.2777 19.7007 18.4157 19.7007C17.5687 19.7007 17.0627 19.1547 17.0627 18.1977V11.3337H16.9117L14.4517 17.9787C14.2047 18.6487 13.7947 18.9487 13.1247 18.9487C12.4687 18.9487 12.0587 18.6347 11.8267 17.9787L9.3927 11.3337H9.2557V18.1977C9.2557 19.1547 8.7367 19.7007 7.8747 19.7007Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM8.2847 20.0155C7.3147 20.0155 6.7537 19.4005 6.7537 18.3335V8.7495C6.7537 7.4515 7.6157 6.6035 8.9417 6.6035C10.1447 6.6035 10.8967 7.1915 11.2657 8.4085L13.4117 14.7655H13.5077L15.6407 8.4085C16.0097 7.2055 16.7477 6.6035 17.9647 6.6035C19.2907 6.6035 20.1657 7.4515 20.1657 8.7495V18.3335C20.1657 19.4005 19.5777 20.0155 18.6207 20.0155C17.6367 20.0155 17.0627 19.4005 17.0627 18.3335V12.1265H16.9257L14.8617 18.0055C14.6017 18.7715 14.1637 19.0855 13.4117 19.0855C12.6737 19.0855 12.2367 18.7305 11.9907 18.0055L9.9937 12.1265H9.8437V18.3335C9.8437 19.4005 9.2557 20.0155 8.2847 20.0155Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM7.0137 18.7575C6.5217 18.7575 6.2207 18.4295 6.2207 17.8825V6.9045C6.2207 6.2755 6.6587 5.8515 7.2867 5.8515C7.8477 5.8515 8.2167 6.0975 8.4357 6.6305L12.3457 16.4605H12.4137L16.3247 6.6305C16.5427 6.0975 16.9117 5.8515 17.4587 5.8515C18.0877 5.8515 18.5387 6.2755 18.5387 6.9045V17.8825C18.5387 18.4295 18.2387 18.7575 17.7327 18.7575C17.2537 18.7575 16.9397 18.4295 16.9397 17.8825V8.8735H16.8437L13.2757 17.8285C13.0977 18.2515 12.8107 18.4435 12.3597 18.4435C11.9357 18.4435 11.6487 18.2515 11.4707 17.8285L7.9157 8.8735H7.8067V17.8825C7.8067 18.4295 7.5057 18.7575 7.0137 18.7575Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM7.3827 19.3183C6.6717 19.3183 6.2477 18.8403 6.2477 18.0473V7.5193C6.2477 6.6313 6.8637 6.0293 7.7797 6.0293C8.5857 6.0293 9.1057 6.3983 9.3927 7.1363L12.7697 15.8043H12.8377L16.2017 7.1363C16.4747 6.3983 16.9937 6.0293 17.8007 6.0293C18.7167 6.0293 19.3457 6.6313 19.3457 7.5193V18.0473C19.3457 18.8533 18.9087 19.3183 18.1697 19.3183C17.4727 19.3183 17.0487 18.8403 17.0487 18.0473V10.3773H16.9117L13.9457 17.9513C13.7267 18.5113 13.3437 18.7713 12.7697 18.7713C12.1957 18.7713 11.8397 18.5113 11.6207 17.9513L8.6677 10.3773H8.5447V18.0473C8.5447 18.8533 8.1077 19.3183 7.3827 19.3183Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM7.1097 19.1135C6.4807 19.1135 6.0977 18.6755 6.0977 17.9515V7.1505C6.0977 6.3715 6.6307 5.8375 7.4237 5.8375C8.1077 5.8375 8.5587 6.1525 8.8047 6.7535L12.5647 16.1195H12.6327L16.3657 6.7535C16.6247 6.1525 17.0767 5.8375 17.7597 5.8375C18.5387 5.8375 19.0857 6.3715 19.0857 7.1505V17.9515C19.0857 18.6895 18.7027 19.1135 18.0337 19.1135C17.4177 19.1135 17.0347 18.6755 17.0347 17.9515V9.8435H16.9117L13.6587 17.9375C13.4527 18.4435 13.0977 18.6755 12.5777 18.6755C12.0587 18.6755 11.7167 18.4435 11.4977 17.9375L8.2717 9.8435H8.1487V17.9515C8.1487 18.6895 7.7517 19.1135 7.1097 19.1135Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.6017 19.482C6.8227 19.482 6.3707 18.977 6.3707 18.115V7.807C6.3707 6.822 7.0407 6.166 8.0527 6.166C8.9547 6.166 9.5297 6.59 9.8297 7.437L12.9197 15.559H13.0017L16.0647 7.437C16.3657 6.59 16.9397 6.166 17.8417 6.166C18.8537 6.166 19.5367 6.822 19.5367 7.807V18.115C19.5367 18.99 19.0587 19.482 18.2797 19.482C17.5137 19.482 17.0487 18.977 17.0487 18.115V10.787H16.9117L14.1637 17.965C13.9317 18.58 13.5347 18.854 12.9197 18.854C12.3187 18.854 11.9357 18.566 11.7027 17.965L8.9827 10.787H8.8457V18.115C8.8457 18.99 8.3807 19.482 7.6017 19.482Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM6.8767 18.2794C6.5767 18.2794 6.3847 18.0884 6.3847 17.7594V6.5764C6.3847 6.1384 6.6857 5.8514 7.1227 5.8514C7.5057 5.8514 7.7517 6.0154 7.9297 6.4534L12.0587 16.8844H12.1267L16.2557 6.4534C16.4337 6.0154 16.6797 5.8514 17.0767 5.8514C17.4997 5.8514 17.8147 6.1384 17.8147 6.5764V17.7594C17.8147 18.0884 17.6227 18.2794 17.3227 18.2794C17.0217 18.2794 16.8297 18.0884 16.8297 17.7594V7.5744H16.7477L12.7557 17.6774C12.6327 17.9784 12.4137 18.1294 12.0857 18.1294C11.7717 18.1294 11.5667 17.9784 11.4297 17.6774L7.4517 7.5744H7.3687V17.7594C7.3687 18.0884 7.1777 18.2794 6.8767 18.2794Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM6.8087 18.033C6.6037 18.033 6.4667 17.897 6.4667 17.705V6.398C6.4667 6.057 6.6997 5.838 7.0277 5.838C7.3417 5.838 7.5197 5.975 7.6837 6.357L11.9087 17.104H11.9767L16.2287 6.357C16.3787 5.975 16.5707 5.838 16.8847 5.838C17.1997 5.838 17.4457 6.057 17.4457 6.398V17.705C17.4457 17.897 17.3087 18.033 17.1037 18.033C16.8987 18.033 16.7757 17.897 16.7757 17.705V6.904H16.6937L12.4957 17.596C12.3867 17.842 12.2227 17.951 11.9497 17.951C11.6897 17.951 11.5117 17.842 11.4157 17.596L7.2047 6.904H7.1367V17.705C7.1367 17.897 6.9997 18.033 6.8087 18.033Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
