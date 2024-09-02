import { IconProps } from "../../types"

export default function DongsignIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.724609375 27.056640625"
          className={className}
        >
          <path
            d="              M7.5877 23.7206C10.3357 23.7206 12.0727 22.5586 12.7557 21.1096H12.9067V21.2596C13.1387 22.9276 14.2327 23.8436 16.0097 23.8436C17.9927 23.8436 19.1547 22.6816 19.1547 20.5896V4.1976H20.9997C21.3967 4.1976 21.7247 3.8696 21.7247 3.4726C21.7247 3.0766 21.3967 2.7476 20.9997 2.7476H19.1407C18.9497 0.9706 17.8147 -0.0004 15.9957 -0.0004C14.1777 -0.0004 13.0707 0.9706 12.8927 2.7476H8.6407C8.2437 2.7476 7.9157 3.0766 7.9157 3.4726C7.9157 3.8696 8.2437 4.1976 8.6407 4.1976H12.8657V9.0236H12.7427C12.1267 7.3696 10.3357 6.2756 7.5877 6.2756C3.5817 6.2756 -0.0003 9.3106 -0.0003 14.9566C-0.0003 20.6176 3.5817 23.7206 7.5877 23.7206ZM9.6247 18.8946C7.7247 18.8946 6.3707 17.2126 6.3707 14.9566C6.3707 12.6606 7.7247 10.9516 9.6247 10.9516C11.5117 10.9516 12.8927 12.6606 12.8927 14.9566C12.8927 17.2126 11.5257 18.8946 9.6247 18.8946ZM1.4357 26.3316C1.4357 26.7286 1.7637 27.0566 2.1597 27.0566H19.1547C19.5507 27.0566 19.8787 26.7286 19.8787 26.3316C19.8787 25.9356 19.5507 25.6076 19.1547 25.6076H2.1597C1.7637 25.6076 1.4357 25.9356 1.4357 26.3316Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.04296875 26.8515625"
          className={className}
        >
          <path
            d="              M7.4097 23.2836C10.1307 23.2836 12.0037 22.0666 12.8377 20.3436H12.9477V21.5876C13.0567 22.7906 13.8637 23.4886 15.0937 23.4886C16.4337 23.4886 17.2677 22.6676 17.2677 21.2456V4.3066H19.2367C19.6737 4.3066 20.0427 3.9516 20.0427 3.5136C20.0427 3.0766 19.6737 2.7206 19.2367 2.7206H17.2677V2.2696C17.2677 0.8336 16.4197 -0.0004 15.0527 -0.0004C13.6857 -0.0004 12.8657 0.8336 12.8657 2.2696V2.7206H8.0797C7.6427 2.7206 7.2867 3.0766 7.2867 3.5136C7.2867 3.9516 7.6427 4.3066 8.0797 4.3066H12.8657V9.6246H12.7837C12.0317 7.8066 10.1177 6.6306 7.4097 6.6306C3.4587 6.6306 -0.0003 9.6386 -0.0003 14.9296C-0.0003 20.2346 3.4587 23.2836 7.4097 23.2836ZM8.7087 19.7426C6.2757 19.7426 4.4707 17.8146 4.4707 14.9296C4.4707 12.0316 6.2757 10.0766 8.7087 10.0766C11.0747 10.0766 12.8927 12.0996 12.8927 14.9296C12.8927 17.7326 11.0747 19.7426 8.7087 19.7426ZM1.3807 26.0446C1.3807 26.4826 1.7367 26.8516 2.1877 26.8516H17.2267C17.6637 26.8516 18.0337 26.4826 18.0337 26.0446C18.0337 25.5936 17.6637 25.2246 17.2267 25.2246H2.1877C1.7367 25.2246 1.3807 25.5936 1.3807 26.0446Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.931640625 26.9609375"
          className={className}
        >
          <path
            d="              M7.5057 23.5023C10.2407 23.5023 12.0317 22.3123 12.7967 20.7403H12.9337V21.4103C13.0977 22.8593 14.0547 23.6793 15.5727 23.6793C17.2537 23.6793 18.2657 22.6683 18.2657 20.9043V4.2523H20.1657C20.5897 4.2523 20.9317 3.9103 20.9317 3.4863C20.9317 3.0763 20.5897 2.7343 20.1657 2.7343H18.2657C18.2657 1.0113 17.2537 0.0003 15.5587 0.0003C13.8767 0.0003 12.8927 0.9843 12.8657 2.7343H8.3807C7.9567 2.7343 7.6157 3.0763 7.6157 3.4863C7.6157 3.9103 7.9567 4.2523 8.3807 4.2523H12.8657V9.2973H12.7557C12.0857 7.5743 10.2407 6.4393 7.5057 6.4393C3.5277 6.4393 -0.0003 9.4613 -0.0003 14.9433C-0.0003 20.4393 3.5277 23.5023 7.5057 23.5023ZM9.1877 19.2913C7.0407 19.2913 5.4687 17.5003 5.4687 14.9433C5.4687 12.3593 7.0407 10.5413 9.1877 10.5413C11.2927 10.5413 12.8927 12.4003 12.8927 14.9433C12.8927 17.4593 11.3067 19.2913 9.1877 19.2913ZM1.4087 26.1953C1.4087 26.6053 1.7497 26.9613 2.1737 26.9613H18.2387C18.6617 26.9613 19.0037 26.6053 19.0037 26.1953C19.0037 25.7713 18.6617 25.4293 18.2387 25.4293H2.1737C1.7497 25.4293 1.4087 25.7713 1.4087 26.1953Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.6640625 25.9765625"
          className={className}
        >
          <path
            d="              M7.0137 22.3535C9.8027 22.3535 11.8807 20.9315 12.8517 18.6075H12.9067V21.6155C12.9067 22.1755 13.2887 22.5315 13.8087 22.5315C14.3277 22.5315 14.6977 22.1755 14.6977 21.6155V4.0745H16.9807C17.3637 4.0745 17.6637 3.7595 17.6637 3.3905C17.6637 3.0075 17.3637 2.7065 16.9807 2.7065H14.6977V0.9705C14.6977 0.3825 14.3147 -0.0005 13.7537 -0.0005C13.2067 -0.0005 12.8107 0.3825 12.8107 0.9705V2.7065H7.3557C6.9727 2.7065 6.6717 3.0075 6.6717 3.3905C6.6717 3.7595 6.9727 4.0745 7.3557 4.0745H12.8107V10.5545H12.7557C11.8677 8.2715 9.7757 6.8495 7.0137 6.8495C3.2127 6.8495 -0.0003 9.8165 -0.0003 14.6015C-0.0003 19.3865 3.2127 22.3535 7.0137 22.3535ZM7.3827 20.6445C4.3337 20.6445 1.9547 18.3065 1.9547 14.6015C1.9547 10.9105 4.3337 8.5585 7.3827 8.5585C10.4177 8.5585 12.7837 11.1015 12.7837 14.6015C12.7837 18.1155 10.4177 20.6445 7.3827 20.6445ZM1.1757 25.2655C1.1757 25.6485 1.4907 25.9765 1.8727 25.9765H14.8337C15.2167 25.9765 15.5447 25.6485 15.5447 25.2655C15.5447 24.8825 15.2167 24.5685 14.8337 24.5685H1.8727C1.4907 24.5685 1.1757 24.8825 1.1757 25.2655Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.94921875 26.701171875"
          className={className}
        >
          <path
            d="              M7.2867 22.982C9.9937 22.982 11.9627 21.738 12.8927 19.838H12.9747V21.779C13.0157 22.695 13.6177 23.242 14.5197 23.242C15.4497 23.242 16.0507 22.654 16.0507 21.656V4.375H18.1157C18.5797 4.375 18.9497 3.992 18.9497 3.527C18.9497 3.076 18.5797 2.693 18.1157 2.693H16.0507V1.641C16.0507 0.602 15.4217 0 14.4517 0C13.4937 0 12.8657 0.602 12.8657 1.641V2.693H7.7247C7.2737 2.693 6.8907 3.076 6.8907 3.527C6.8907 3.992 7.2737 4.375 7.7247 4.375H12.8657V9.994H12.7967C11.9627 8.066 9.9807 6.836 7.2867 6.836C3.3767 6.836 -0.0003 9.844 -0.0003 14.902C-0.0003 19.975 3.3767 22.982 7.2867 22.982ZM8.1077 20.275C5.3457 20.275 3.2677 18.184 3.2677 14.902C3.2677 11.621 5.3457 9.516 8.1077 9.516C10.7867 9.516 12.8927 11.73 12.8927 14.902C12.8927 18.061 10.7867 20.275 8.1077 20.275ZM1.3397 25.84C1.3397 26.318 1.7367 26.701 2.2017 26.701H15.9957C16.4607 26.701 16.8577 26.318 16.8577 25.84C16.8577 25.375 16.4607 24.979 15.9957 24.979H2.2017C1.7367 24.979 1.3397 25.375 1.3397 25.84Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.34765625 26.6328125"
          className={className}
        >
          <path
            d="              M7.2187 22.818C9.9117 22.818 11.9357 21.561 12.9197 19.551H12.9887V21.902C12.9887 22.641 13.4807 23.119 14.1917 23.119C14.8887 23.119 15.3677 22.641 15.3677 21.902V4.416H17.4867C17.9517 4.416 18.3477 4.02 18.3477 3.541C18.3477 3.076 17.9517 2.68 17.4867 2.68H15.3677V1.271C15.3677 0.479 14.8617 0 14.1227 0C13.3847 0 12.8657 0.479 12.8657 1.271V2.68H7.5337C7.0547 2.68 6.6717 3.076 6.6717 3.541C6.6717 4.02 7.0547 4.416 7.5337 4.416H12.8657V10.213H12.8107C11.9217 8.217 9.9117 6.959 7.2187 6.959C3.3357 6.959 -0.0003 9.953 -0.0003 14.889C-0.0003 19.824 3.3357 22.818 7.2187 22.818ZM7.7797 20.59C4.8267 20.59 2.5837 18.402 2.5837 14.889C2.5837 11.389 4.8267 9.201 7.7797 9.201C10.6367 9.201 12.8927 11.525 12.8927 14.889C12.8927 18.252 10.6367 20.59 7.7797 20.59ZM1.3267 25.73C1.3267 26.223 1.7227 26.633 2.2147 26.633H15.2987C15.7907 26.633 16.1877 26.223 16.1877 25.73C16.1877 25.252 15.7907 24.842 15.2987 24.842H2.2147C1.7227 24.842 1.3267 25.252 1.3267 25.73Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.427734375 26.76953125"
          className={className}
        >
          <path
            d="              M7.3417 23.1186C10.0487 23.1186 11.9767 21.8746 12.8657 20.0566H12.9607V21.6976C13.0297 22.7366 13.7267 23.3516 14.7657 23.3516C15.8727 23.3516 16.5707 22.6676 16.5707 21.4926V4.3476H18.6077C19.0587 4.3476 19.4277 3.9786 19.4277 3.5276C19.4277 3.0766 19.0587 2.7066 18.6077 2.7066H16.5707V1.9136C16.5707 0.7106 15.8597 -0.0004 14.7107 -0.0004C13.5767 -0.0004 12.8657 0.7106 12.8657 1.9136V2.7066H7.8887C7.4377 2.7066 7.0687 3.0766 7.0687 3.5276C7.0687 3.9786 7.4377 4.3476 7.8887 4.3476H12.8657V9.8296H12.7837C11.9907 7.9566 10.0487 6.7536 7.3417 6.7536C3.4047 6.7536 -0.0003 9.7616 -0.0003 14.9156C-0.0003 20.0836 3.4047 23.1186 7.3417 23.1186ZM8.3677 20.0566C5.7427 20.0566 3.7867 18.0336 3.7867 14.9156C3.7867 11.7986 5.7427 9.7616 8.3677 9.7616C10.9097 9.7616 12.8927 11.8946 12.8927 14.9156C12.8927 17.9236 10.9097 20.0566 8.3677 20.0566ZM1.3537 25.9356C1.3537 26.3866 1.7367 26.7696 2.2017 26.7696H16.5297C16.9807 26.7696 17.3637 26.3866 17.3637 25.9356C17.3637 25.4706 16.9807 25.0876 16.5297 25.0876H2.2017C1.7367 25.0876 1.3537 25.4706 1.3537 25.9356Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.775390625 25.087890625"
          className={className}
        >
          <path
            d="              M6.7267 21.725C9.6387 21.725 11.8267 20.098 12.7557 17.35H12.7967V21.246C12.7967 21.547 13.0157 21.766 13.3027 21.766C13.5897 21.766 13.8227 21.547 13.8227 21.246V3.609H16.3247C16.5707 3.609 16.7757 3.404 16.7757 3.158C16.7757 2.926 16.5707 2.721 16.3247 2.721H13.8227V0.547C13.8227 0.232 13.5897 0 13.2757 0C12.9747 0 12.7427 0.232 12.7427 0.547V2.721H7.1097C6.8767 2.721 6.6717 2.926 6.6717 3.158C6.6717 3.404 6.8767 3.609 7.1097 3.609H12.7427V11.02H12.7017C11.7987 8.326 9.5977 6.713 6.7267 6.713C3.0767 6.713 -0.0003 9.639 -0.0003 14.219C-0.0003 18.799 3.0767 21.725 6.7267 21.725ZM6.8637 20.727C3.6917 20.727 1.1077 18.17 1.1077 14.219C1.1077 10.268 3.6917 7.711 6.8637 7.711C10.1447 7.711 12.6327 10.527 12.6327 14.219C12.6327 17.91 10.1447 20.727 6.8637 20.727ZM0.9707 24.65C0.9707 24.883 1.1757 25.088 1.4217 25.088H14.2327C14.4647 25.088 14.6837 24.883 14.6837 24.65C14.6837 24.404 14.4647 24.199 14.2327 24.199H1.4217C1.1757 24.199 0.9707 24.404 0.9707 24.65Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.310546875 24.650390625"
          className={className}
        >
          <path
            d="              M6.5897 21.4099C9.5567 21.4099 11.7987 19.6739 12.7017 16.7069H12.7287V21.0549C12.7287 21.2189 12.8787 21.3689 13.0427 21.3689C13.2207 21.3689 13.3707 21.2189 13.3707 21.0549V3.3769H15.9957C16.1597 3.3769 16.3107 3.2129 16.3107 3.0489C16.3107 2.8849 16.1597 2.7339 15.9957 2.7339H13.3707V0.3419C13.3707 0.1499 13.2207 -0.0001 13.0297 -0.0001C12.8517 -0.0001 12.7017 0.1499 12.7017 0.3419V2.7339H6.9867C6.8227 2.7339 6.6717 2.8849 6.6717 3.0489C6.6717 3.2129 6.8227 3.3769 6.9867 3.3769H12.7017V11.2379H12.6597C11.7577 8.3539 9.5017 6.6309 6.5897 6.6309C2.9937 6.6309 -0.0003 9.5429 -0.0003 14.0139C-0.0003 18.4979 2.9937 21.4099 6.5897 21.4099ZM6.5897 20.7539C3.3637 20.7539 0.6837 18.1019 0.6837 14.0139C0.6837 9.9399 3.3637 7.2869 6.5897 7.2869C10.0077 7.2869 12.5647 10.2269 12.5647 14.0139C12.5647 17.8149 10.0077 20.7539 6.5897 20.7539ZM0.8617 24.3219C0.8617 24.4859 1.0117 24.6499 1.1897 24.6499H13.9177C14.0817 24.6499 14.2327 24.4859 14.2327 24.3219C14.2327 24.1579 14.0817 24.0079 13.9177 24.0079H1.1897C1.0117 24.0079 0.8617 24.1579 0.8617 24.3219Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}