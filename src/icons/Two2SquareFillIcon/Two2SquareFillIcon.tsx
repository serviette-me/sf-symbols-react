import { IconProps } from "../../types"

export default function Two2SquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM7.7517 19.0173C6.9177 19.0173 6.4527 18.6213 6.4527 17.9102C6.4527 17.4593 6.6037 17.0903 7.1777 16.3793L8.9137 14.1643C9.7757 13.0973 10.4457 12.1133 10.4457 11.1293C10.4457 10.5003 10.2677 9.9263 9.6797 9.9263C9.1467 9.9263 8.9687 10.3633 8.8187 10.8692C8.6137 11.5523 8.1487 11.8263 7.5877 11.8263C6.8357 11.8263 6.4397 11.3063 6.4397 10.6093C6.4397 9.0373 7.9027 7.7793 9.6797 7.7793C11.6487 7.7793 13.0977 8.9553 13.0977 11.0473C13.0977 12.6333 12.3047 13.6723 11.2247 14.9703L9.7347 16.7203V16.8433H12.2227C12.9887 16.8433 13.2757 17.3633 13.2757 17.9373C13.2757 18.4983 12.9887 19.0173 12.2227 19.0173ZM15.5037 19.0173C14.6567 19.0173 14.1917 18.6213 14.1917 17.9102C14.1917 17.4593 14.3557 17.0903 14.9157 16.3793L16.6527 14.1643C17.5137 13.0973 18.1837 12.1133 18.1837 11.1293C18.1837 10.5003 18.0057 9.9263 17.4177 9.9263C16.8987 9.9263 16.7067 10.3633 16.5567 10.8692C16.3517 11.5523 15.8867 11.8263 15.3267 11.8263C14.5877 11.8263 14.1777 11.3063 14.1777 10.6093C14.1777 9.0373 15.6407 7.7793 17.4177 7.7793C19.3867 7.7793 20.8497 8.9553 20.8497 11.0473C20.8497 12.6333 20.0427 13.6723 18.9767 14.9703L17.4727 16.7203V16.8433H19.9607C20.7267 16.8433 21.0137 17.3633 21.0137 17.9373C21.0137 18.4983 20.7267 19.0173 19.9607 19.0173Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.0137 18.6487C6.2617 18.6487 5.8787 18.2797 5.8787 17.6917C5.8787 17.2397 6.0977 16.8707 6.5077 16.3517L8.5997 13.6857C9.4067 12.6737 10.1307 11.6077 10.1307 10.5547C10.1307 9.7347 9.8027 9.0777 9.0777 9.0777C8.4217 9.0777 8.1487 9.5977 7.9437 10.3227C7.7657 10.8967 7.3967 11.1427 6.8767 11.1427C6.2347 11.1427 5.8787 10.6917 5.8787 10.0897C5.8787 8.5587 7.3007 7.1917 9.0917 7.1917C11.0467 7.1917 12.4277 8.4627 12.4277 10.4587C12.4277 11.8807 11.7987 12.9197 10.5407 14.4377L8.7777 16.6117V16.7347H11.6897C12.3187 16.7347 12.6187 17.1447 12.6187 17.6917C12.6187 18.2247 12.3317 18.6487 11.6897 18.6487ZM14.9297 18.6487C14.1777 18.6487 13.7947 18.2797 13.7947 17.6917C13.7947 17.2397 14.0137 16.8707 14.4237 16.3517L16.5157 13.6857C17.3087 12.6737 18.0337 11.6077 18.0337 10.5547C18.0337 9.7347 17.7047 9.0777 16.9937 9.0777C16.3377 9.0777 16.0647 9.5977 15.8597 10.3227C15.6817 10.8967 15.3127 11.1427 14.7927 11.1427C14.1507 11.1427 13.7947 10.6917 13.7947 10.0897C13.7947 8.5587 15.2167 7.1917 17.0077 7.1917C18.9627 7.1917 20.3437 8.4627 20.3437 10.4587C20.3437 11.8807 19.7017 12.9197 18.4567 14.4377L16.6937 16.6117V16.7347H19.6057C20.2207 16.7347 20.5347 17.1447 20.5347 17.6917C20.5347 18.2247 20.2347 18.6487 19.6057 18.6487Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM7.3967 18.8535C6.6037 18.8535 6.1797 18.4575 6.1797 17.8145C6.1797 17.3635 6.3707 16.9945 6.8637 16.3785L8.7637 13.9455C9.5977 12.9065 10.2947 11.8805 10.2947 10.8695C10.2947 10.1445 10.0487 9.5295 9.3927 9.5295C8.8047 9.5295 8.5857 10.0075 8.4087 10.6095C8.2167 11.2515 7.7927 11.5115 7.2597 11.5115C6.5487 11.5115 6.1797 11.0335 6.1797 10.3635C6.1797 8.8185 7.6157 7.5055 9.3927 7.5055C11.3747 7.5055 12.7837 8.7225 12.7837 10.7875C12.7837 12.2775 12.0587 13.3305 10.8967 14.7245L9.2837 16.6795V16.8025H11.9627C12.6737 16.8025 12.9607 17.2675 12.9607 17.8285C12.9607 18.3745 12.6737 18.8535 11.9627 18.8535ZM15.2307 18.8535C14.4237 18.8535 13.9997 18.4575 13.9997 17.8145C13.9997 17.3635 14.1917 16.9945 14.6837 16.3785L16.5837 13.9455C17.4177 12.9065 18.1157 11.8805 18.1157 10.8695C18.1157 10.1445 17.8687 9.5295 17.2127 9.5295C16.6387 9.5295 16.4067 10.0075 16.2287 10.6095C16.0367 11.2515 15.6137 11.5115 15.0797 11.5115C14.3827 11.5115 13.9997 11.0335 13.9997 10.3635C13.9997 8.8185 15.4357 7.5055 17.2267 7.5055C19.1817 7.5055 20.6037 8.7225 20.6037 10.7875C20.6037 12.2775 19.8787 13.3305 18.7307 14.7245L17.1037 16.6795V16.8025H19.7967C20.4937 16.8025 20.7817 17.2675 20.7817 17.8285C20.7817 18.3745 20.4937 18.8535 19.7967 18.8535Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM6.1937 18.0055C5.6877 18.0055 5.4277 17.7325 5.4277 17.3355C5.4277 17.0075 5.6187 16.7345 5.8247 16.4475L8.4767 12.9335C9.2837 11.8805 9.9117 10.8285 9.9117 9.7345C9.9117 8.7095 9.4197 7.7795 8.4217 7.7795C7.4927 7.7795 7.0817 8.5035 6.8497 9.5705C6.7407 9.9395 6.4937 10.1175 6.1247 10.1175C5.6877 10.1175 5.4417 9.8025 5.4417 9.4065C5.4417 7.9435 6.6997 6.4535 8.4217 6.4535C10.2947 6.4535 11.4437 7.8345 11.4437 9.6665C11.4437 10.8695 11.0057 11.8945 9.7347 13.5485L7.4517 16.5565V16.6665H11.0057C11.4157 16.6665 11.6617 16.9125 11.6617 17.3355C11.6617 17.7325 11.4157 18.0055 11.0057 18.0055ZM13.9457 18.0055C13.4397 18.0055 13.1797 17.7325 13.1797 17.3355C13.1797 17.0075 13.3577 16.7345 13.5767 16.4475L16.2287 12.9335C17.0217 11.8805 17.6637 10.8285 17.6637 9.7345C17.6637 8.7095 17.1587 7.7795 16.1737 7.7795C15.2437 7.7795 14.8337 8.5035 14.5877 9.5705C14.4927 9.9395 14.2597 10.1175 13.8767 10.1175C13.4257 10.1175 13.1937 9.8025 13.1937 9.4065C13.1937 7.9435 14.4517 6.4535 16.1737 6.4535C18.0337 6.4535 19.1817 7.8345 19.1817 9.6665C19.1817 10.8695 18.7577 11.8945 17.4727 13.5485L15.2027 16.5565V16.6665H18.7577C19.1547 16.6665 19.4137 16.9125 19.4137 17.3355C19.4137 17.7325 19.1677 18.0055 18.7577 18.0055Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM6.5347 18.4163C5.8517 18.4163 5.5097 18.0473 5.5097 17.5273C5.5097 17.0903 5.7557 16.7343 6.0707 16.3243L8.3947 13.3713C9.1597 12.3863 9.9257 11.2793 9.9257 10.1723C9.9257 9.2423 9.5017 8.5173 8.6957 8.5173C7.9567 8.5173 7.6287 9.0923 7.3967 9.9533C7.2327 10.4593 6.9047 10.6913 6.4257 10.6913C5.8517 10.6913 5.5237 10.2953 5.5237 9.7483C5.5237 8.2443 6.9047 6.7953 8.7087 6.7953C10.6637 6.7953 11.9907 8.1343 11.9907 10.0763C11.9907 11.3883 11.4707 12.4143 10.1177 14.0953L8.1617 16.5293V16.6523H11.3477C11.8947 16.6523 12.1957 17.0083 12.1957 17.5273C12.1957 18.0473 11.8947 18.4163 11.3477 18.4163ZM14.5607 18.4163C13.8767 18.4163 13.5487 18.0473 13.5487 17.5273C13.5487 17.0903 13.7817 16.7343 14.1097 16.3243L16.4197 13.3713C17.1857 12.3863 17.9517 11.2793 17.9517 10.1723C17.9517 9.2423 17.5277 8.5173 16.7347 8.5173C15.9687 8.5173 15.6547 9.0923 15.4087 9.9533C15.2577 10.4593 14.9437 10.6913 14.4517 10.6913C13.8767 10.6913 13.5627 10.2953 13.5627 9.7483C13.5627 8.2443 14.9437 6.7953 16.7347 6.7953C18.6897 6.7953 20.0157 8.1343 20.0157 10.0763C20.0157 11.3883 19.4827 12.4143 18.1427 14.0953L16.1877 16.5293V16.6523H19.3727C19.9067 16.6523 20.2207 17.0083 20.2207 17.5273C20.2207 18.0473 19.9197 18.4163 19.3727 18.4163Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM6.2757 18.2655C5.6187 18.2655 5.3047 17.9235 5.3047 17.4455C5.3047 17.0075 5.5777 16.6525 5.8247 16.3105L8.2717 13.1935C9.0237 12.2365 9.8167 11.0875 9.8167 9.9665C9.8167 8.9555 9.3377 8.2165 8.4907 8.2165C7.6837 8.2165 7.3417 8.8045 7.0817 9.7475C6.9317 10.2125 6.6307 10.4315 6.1657 10.4315C5.6327 10.4315 5.3187 10.0625 5.3187 9.5425C5.3187 8.0665 6.6997 6.5765 8.4907 6.5765C10.4457 6.5765 11.7437 7.9565 11.7437 9.8575C11.7437 11.1015 11.2797 12.1405 9.8707 13.9045L7.8067 16.4885V16.6115H11.1567C11.6487 16.6115 11.9497 16.9125 11.9497 17.4455C11.9497 17.9375 11.6617 18.2655 11.1567 18.2655ZM14.3557 18.2655C13.6997 18.2655 13.3987 17.9235 13.3987 17.4455C13.3987 17.0075 13.6587 16.6525 13.9317 16.3105L16.3657 13.1935C17.1037 12.2365 17.8967 11.0875 17.8967 9.9665C17.8967 8.9555 17.4177 8.2165 16.5837 8.2165C15.7777 8.2165 15.4357 8.8045 15.1617 9.7475C15.0257 10.2125 14.7247 10.4315 14.2597 10.4315C13.7127 10.4315 13.4257 10.0625 13.4257 9.5425C13.4257 8.0665 14.7927 6.5765 16.5977 6.5765C18.5387 6.5765 19.8247 7.9565 19.8247 9.8575C19.8247 11.1015 19.3727 12.1405 17.9517 13.9045L15.9007 16.4885V16.6115H19.2497C19.7287 16.6115 20.0567 16.9125 20.0567 17.4455C20.0567 17.9375 19.7427 18.2655 19.2497 18.2655Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM6.7407 18.512C6.0297 18.512 5.6737 18.143 5.6737 17.596C5.6737 17.158 5.9067 16.789 6.2617 16.338L8.4767 13.508C9.2697 12.51 10.0077 11.416 10.0077 10.336C10.0077 9.461 9.6387 8.764 8.8597 8.764C8.1487 8.764 7.8617 9.311 7.6287 10.117C7.4647 10.65 7.1227 10.883 6.6177 10.883C6.0157 10.883 5.6737 10.459 5.6737 9.885C5.6737 8.381 7.0817 6.959 8.8727 6.959C10.8277 6.959 12.1817 8.271 12.1817 10.24C12.1817 11.594 11.6077 12.633 10.2947 14.246L8.4217 16.57V16.693H11.4977C12.0727 16.693 12.3727 17.062 12.3727 17.609C12.3727 18.115 12.0857 18.512 11.4977 18.512ZM14.7107 18.512C13.9997 18.512 13.6587 18.143 13.6587 17.596C13.6587 17.158 13.8767 16.789 14.2457 16.338L16.4607 13.508C17.2407 12.51 17.9927 11.416 17.9927 10.336C17.9927 9.461 17.6097 8.764 16.8437 8.764C16.1327 8.764 15.8317 9.311 15.5997 10.117C15.4357 10.65 15.0937 10.883 14.6017 10.883C13.9997 10.883 13.6587 10.459 13.6587 9.885C13.6587 8.381 15.0667 6.959 16.8577 6.959C18.8127 6.959 20.1527 8.271 20.1527 10.24C20.1527 11.594 19.5777 12.633 18.2797 14.246L16.4067 16.57V16.693H19.4687C20.0427 16.693 20.3577 17.062 20.3577 17.609C20.3577 18.115 20.0567 18.512 19.4687 18.512Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM6.1117 17.6364C5.7967 17.6364 5.5917 17.4724 5.5917 17.1854C5.5917 16.9804 5.6737 16.8164 5.8107 16.6254L8.7497 12.5914C9.6117 11.3884 10.0487 10.4594 10.0487 9.4334C10.0487 8.3534 9.5297 7.2054 8.3267 7.2054C7.2457 7.2054 6.7267 8.0664 6.5347 9.3104C6.4937 9.5564 6.3167 9.6934 6.0707 9.6934C5.7557 9.6934 5.6057 9.4474 5.6057 9.2144C5.6057 7.7524 6.6997 6.2754 8.3127 6.2754C10.0767 6.2754 11.0337 7.6564 11.0337 9.3794C11.0337 10.5414 10.6507 11.5394 9.5427 13.0704L6.9727 16.6384V16.7074H10.8277C11.1017 16.7074 11.2927 16.8984 11.2927 17.1724C11.2927 17.4454 11.1017 17.6364 10.8277 17.6364ZM13.3987 17.6364C13.0837 17.6364 12.8927 17.4724 12.8927 17.1854C12.8927 16.9804 12.9607 16.8164 13.1117 16.6254L16.0507 12.5914C16.8987 11.3884 17.3497 10.4594 17.3497 9.4334C17.3497 8.3534 16.8167 7.2054 15.6267 7.2054C14.5467 7.2054 14.0277 8.0664 13.8357 9.3104C13.7947 9.5564 13.6177 9.6934 13.3707 9.6934C13.0427 9.6934 12.9067 9.4474 12.9067 9.2144C12.9067 7.7524 13.9867 6.2754 15.6137 6.2754C17.3637 6.2754 18.3337 7.6564 18.3337 9.3794C18.3337 10.5414 17.9517 11.5394 16.8297 13.0704L14.2737 16.6384V16.7074H18.1287C18.3887 16.7074 18.5797 16.8984 18.5797 17.1724C18.5797 17.4454 18.4027 17.6364 18.1287 17.6364Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM6.0567 17.445C5.8377 17.445 5.6737 17.336 5.6737 17.104C5.6737 16.98 5.7017 16.857 5.7967 16.707L8.8867 12.4C9.7757 11.143 10.1177 10.281 10.1177 9.27C10.1177 8.162 9.5707 6.904 8.2717 6.904C7.1227 6.904 6.5627 7.848 6.3847 9.188C6.3707 9.352 6.2347 9.475 6.0427 9.475C5.7837 9.475 5.6877 9.27 5.6877 9.119C5.6877 7.643 6.6997 6.18 8.2577 6.18C9.9667 6.18 10.8277 7.561 10.8277 9.229C10.8277 10.363 10.4587 11.361 9.4477 12.824L6.7267 16.68V16.734H10.7327C10.9377 16.734 11.0877 16.885 11.0877 17.09C11.0877 17.295 10.9377 17.445 10.7327 17.445ZM13.1247 17.445C12.9067 17.445 12.7427 17.336 12.7427 17.104C12.7427 16.98 12.7697 16.857 12.8657 16.707L15.9547 12.4C16.8437 11.143 17.1857 10.281 17.1857 9.27C17.1857 8.162 16.6387 6.904 15.3397 6.904C14.1777 6.904 13.6177 7.848 13.4527 9.188C13.4397 9.352 13.3027 9.475 13.1117 9.475C12.8517 9.475 12.7557 9.27 12.7557 9.119C12.7557 7.643 13.7537 6.18 15.3267 6.18C17.0347 6.18 17.8967 7.561 17.8967 9.229C17.8967 10.363 17.5277 11.361 16.5017 12.824L13.7947 16.68V16.734H17.8007C18.0057 16.734 18.1567 16.885 18.1567 17.09C18.1567 17.295 18.0057 17.445 17.8007 17.445Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}