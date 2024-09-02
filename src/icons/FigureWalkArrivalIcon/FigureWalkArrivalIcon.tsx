import { IconProps } from "../../types"

export default function FigureWalkArrivalIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.48552133276923 33.00390625"
          className={className}
        >
          <path
            d="              M-0.0003 30.5702C-0.0003 31.9102 1.0937 33.0042 2.4337 33.0042C3.7597 33.0042 4.8537 31.9102 4.8537 30.5702V2.4332C4.8537 1.0942 3.7597 0.0002 2.4337 0.0002C1.0937 0.0002 -0.0003 1.0942 -0.0003 2.4332ZM20.2887 6.9182C22.1897 6.9182 23.7347 5.3592 23.7347 3.4592C23.7347 1.5582 22.1897 0.0132 20.2887 0.0132C18.3887 0.0132 16.8297 1.5582 16.8297 3.4592C16.8297 5.3592 18.3887 6.9182 20.2887 6.9182ZM17.3227 31.5962L20.3577 25.4162C20.4937 25.1422 20.5487 25.0332 20.8087 24.6912L23.7757 20.9862C24.9927 19.4692 25.3067 18.5942 25.1837 17.0212L24.9787 14.1782C24.9517 13.8222 25.3207 13.6992 25.5527 13.9182L26.3727 14.6562L26.6877 18.3342C26.7837 19.3732 27.3987 19.9882 28.3557 19.9202C29.2987 19.8922 29.9137 19.1542 29.8317 18.1422L29.5587 14.6832C29.4627 13.6312 29.1757 12.9882 28.4517 12.2632L26.2087 10.0762C24.7867 8.6812 23.6527 7.8342 22.0257 7.8342C19.8787 7.8342 18.5257 9.4202 18.6757 11.6352L18.9767 15.8592C19.0857 17.3492 19.3317 18.2652 19.7967 19.8512L19.8657 20.1112L18.0747 22.6682C17.7457 23.1462 17.4457 23.6252 17.2127 24.0762L14.2457 30.0922C13.1117 32.3882 16.2697 33.7152 17.3227 31.5962ZM12.0177 13.5352C10.9927 13.5352 10.2817 14.1642 10.2817 15.1072C10.2817 16.0642 10.9787 16.6792 12.0177 16.6792H15.1487C16.1057 16.6792 16.5837 16.5022 17.1037 15.9822L17.2537 15.8322L16.9667 11.6762L15.2577 13.5352ZM27.5897 32.0742C28.9297 33.6742 31.5957 31.7732 29.9827 29.8462L25.7027 24.7732L25.1157 22.0662L22.4087 25.4432L22.4627 25.6212C22.6267 26.1542 22.7227 26.3182 23.1877 26.8652Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.54963895615436 31.6640625"
          className={className}
        >
          <path
            d="              M-0.0003 29.8866C-0.0003 30.8716 0.8067 31.6636 1.7777 31.6636C2.7617 31.6636 3.5687 30.8716 3.5687 29.8866V1.7906C3.5687 0.8066 2.7617 -0.0004 1.7777 -0.0004C0.8067 -0.0004 -0.0003 0.8066 -0.0003 1.7906ZM18.8537 6.4536C20.6307 6.4536 22.0797 5.0176 22.0797 3.2406C22.0797 1.4626 20.6307 0.0276 18.8537 0.0276C17.0767 0.0276 15.6407 1.4626 15.6407 3.2406C15.6407 5.0176 17.0767 6.4536 18.8537 6.4536ZM15.8317 30.3656L18.7717 24.3766C18.9087 24.1306 18.9497 24.0076 19.2227 23.6656L22.0797 20.0706C23.2147 18.6626 23.5567 17.8696 23.4337 16.3246L23.2147 13.3986C23.1877 13.0296 23.6117 12.8656 23.9117 13.1386L24.8277 13.9586L25.1287 17.5686C25.2107 18.5256 25.7577 19.0586 26.6187 19.0036C27.4667 18.9626 27.9997 18.3066 27.9177 17.4046L27.6587 14.0546C27.5767 13.0836 27.3297 12.4966 26.6187 11.7856L24.4587 9.6656C23.0777 8.3266 22.0257 7.5336 20.4937 7.5336C18.4567 7.5336 17.2267 9.0376 17.3767 11.0876L17.6507 15.1756C17.7597 16.6116 17.9787 17.4996 18.4437 19.0036L18.5387 19.3186L16.7617 21.8476C16.4607 22.2716 16.1737 22.7366 15.9417 23.1876L13.0707 29.0116C12.0447 31.0896 14.8747 32.2796 15.8317 30.3656ZM10.8007 13.0566C9.8707 13.0566 9.2557 13.6176 9.2557 14.4516C9.2557 15.3126 9.8577 15.8596 10.8007 15.8596H13.8357C14.7107 15.8596 15.1487 15.6956 15.6267 15.2166L16.1057 14.7386L15.8457 11.0196L13.9997 13.0566ZM25.9627 30.8166C27.1657 32.2386 29.5447 30.5426 28.0957 28.8066L23.9257 23.8716L23.3107 20.9586L20.8637 24.0356L21.0407 24.5956C21.2047 25.1016 21.2737 25.2386 21.7107 25.7576Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.57141454121441 32.375"
          className={className}
        >
          <path
            d="              M-0.0003 30.2554C-0.0003 31.4184 0.9567 32.3754 2.1187 32.3754C3.2947 32.3754 4.2517 31.4184 4.2517 30.2554V2.1324C4.2517 0.9574 3.2947 0.0004 2.1187 0.0004C0.9567 0.0004 -0.0003 0.9574 -0.0003 2.1324ZM19.6057 6.6994C21.4517 6.6994 22.9547 5.1954 22.9547 3.3634C22.9547 1.5174 21.4517 0.0134 19.6057 0.0134C17.7737 0.0134 16.2697 1.5174 16.2697 3.3634C16.2697 5.1954 17.7737 6.6994 19.6057 6.6994ZM16.6117 31.0214L19.6187 24.9234C19.7427 24.6644 19.7967 24.5414 20.0567 24.2124L22.9687 20.5624C24.1587 19.0994 24.4867 18.2524 24.3637 16.6934L24.1447 13.8084C24.1177 13.4534 24.5137 13.3024 24.7867 13.5484L25.6487 14.3284L25.9627 17.9644C26.0447 18.9764 26.6187 19.5504 27.5347 19.4824C28.4377 19.4554 29.0117 18.7574 28.9297 17.7874L28.6567 14.3824C28.5747 13.3714 28.3007 12.7554 27.5897 12.0454L25.3747 9.8844C23.9807 8.5174 22.8867 7.6974 21.3007 7.6974C19.2087 7.6974 17.9097 9.2424 18.0607 11.3754L18.3477 15.5314C18.4567 17.0074 18.6897 17.8964 19.1547 19.4554L19.2367 19.7284L17.4457 22.2854C17.1447 22.7364 16.8437 23.2014 16.6247 23.6524L13.6857 29.5864C12.6057 31.7734 15.6137 33.0314 16.6117 31.0214ZM11.4437 13.3024C10.4587 13.3024 9.8027 13.9044 9.8027 14.8064C9.8027 15.7094 10.4457 16.2834 11.4437 16.2834H14.5337C15.4497 16.2834 15.9007 16.1194 16.4067 15.6274L16.7067 15.3124L16.4337 11.3614L14.6697 13.3024ZM26.8247 31.4864C28.0957 33.0044 30.6247 31.1854 29.0937 29.3534L24.8687 24.3494L24.2537 21.5464L21.6837 24.7734L21.7927 25.1294C21.9567 25.6624 22.0387 25.8124 22.4907 26.3454Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.70538384812296 29.39453125"
          className={className}
        >
          <path
            d="              M-0.0003 28.4648C-0.0003 28.9708 0.4097 29.3948 0.9297 29.3948C1.4497 29.3948 1.8597 28.9708 1.8597 28.4648V0.9298C1.8597 0.4238 1.4497 -0.0002 0.9297 -0.0002C0.4097 -0.0002 -0.0003 0.4238 -0.0003 0.9298ZM16.7887 5.7968C18.3887 5.7968 19.6737 4.5118 19.6737 2.9118C19.6737 1.3128 18.3887 0.0278 16.7887 0.0278C15.1897 0.0278 13.9047 1.3128 13.9047 2.9118C13.9047 4.5118 15.1897 5.7968 16.7887 5.7968ZM13.7127 28.3688L16.5017 22.7088C16.6247 22.4898 16.6527 22.3538 16.9257 22.0118L19.6327 18.6348C20.6447 17.3628 20.9867 16.6658 20.8637 15.1898L20.6447 12.2638C20.6177 11.8808 21.1227 11.6758 21.4927 11.9898L22.4767 12.8788L22.7637 16.3518C22.8457 17.1858 23.2837 17.6098 24.0077 17.5548C24.7457 17.5278 25.1697 16.9808 25.1017 16.2008L24.8557 13.0428C24.7867 12.1818 24.5687 11.6488 23.9117 11.0198L21.8747 9.0098C20.5897 7.7378 19.6467 7.0278 18.2387 7.0278C16.4067 7.0278 15.3127 8.3808 15.4497 10.2268L15.7227 14.0818C15.8187 15.4358 15.9957 16.2698 16.4477 17.6508L16.5707 18.0198L14.8477 20.4808C14.5877 20.8498 14.2867 21.2868 14.0957 21.7108L11.3617 27.2068C10.4867 28.9978 12.9067 29.9958 13.7127 28.3688ZM9.1057 12.2368C8.3127 12.2368 7.7927 12.7008 7.7927 13.4118C7.7927 14.1368 8.3127 14.5878 9.1057 14.5878H11.9627C12.7557 14.5878 13.1247 14.4648 13.5487 14.0278L14.4237 13.1658L14.2047 10.0078L12.1817 12.2368ZM23.5157 28.7658C24.5277 29.9688 26.5507 28.5328 25.3207 27.0568L21.3557 22.3538L20.6857 19.2498L18.5797 21.9028L18.8947 22.9138C19.0587 23.4058 19.1137 23.5158 19.5097 23.9808Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.324048994908722 30.802734375"
          className={className}
        >
          <path
            d="              M-0.0003 29.4357C-0.0003 30.1877 0.6157 30.8027 1.3677 30.8027C2.1187 30.8027 2.7347 30.1877 2.7347 29.4357V1.3667C2.7347 0.6147 2.1187 -0.0003 1.3677 -0.0003C0.6157 -0.0003 -0.0003 0.6147 -0.0003 1.3667ZM17.9517 6.1657C19.6467 6.1657 21.0137 4.7987 21.0137 3.0897C21.0137 1.3947 19.6467 0.0277 17.9517 0.0277C16.2557 0.0277 14.8747 1.3947 14.8747 3.0897C14.8747 4.7987 16.2557 6.1657 17.9517 6.1657ZM14.8747 29.5727L17.7597 23.7067C17.8827 23.4747 17.9237 23.3377 18.1977 22.9957L20.9997 19.4827C22.0797 18.1567 22.4217 17.3907 22.2987 15.8727L22.0797 12.9067C22.0527 12.5367 22.5177 12.3317 22.8597 12.6467L23.8297 13.5077L24.1307 17.0757C24.2127 17.9787 24.7047 18.4567 25.4977 18.4027C26.2907 18.3747 26.7697 17.7737 26.7017 16.9257L26.4417 13.6447C26.3727 12.7417 26.1407 12.1677 25.4437 11.4847L23.3377 9.4067C21.9847 8.0937 20.9867 7.3417 19.5097 7.3417C17.5407 7.3417 16.3927 8.7907 16.5297 10.7327L16.8167 14.7247C16.9117 16.1467 17.1037 17.0077 17.5817 18.4567L17.6917 18.8127L15.9137 21.3277C15.6407 21.7107 15.3537 22.1757 15.1347 22.6137L12.3047 28.3277C11.3477 30.2557 13.9867 31.3637 14.8747 29.5727ZM10.0217 12.7417C9.1597 12.7417 8.5857 13.2617 8.5857 14.0277C8.5857 14.8207 9.1467 15.3257 10.0217 15.3257H12.9887C13.8357 15.3257 14.2327 15.1897 14.6977 14.7247L15.3677 14.0547L15.1207 10.5957L13.1937 12.7417ZM24.9237 29.9957C26.0317 31.3227 28.2457 29.7497 26.9067 28.1367L22.8047 23.2827L22.1487 20.2617L19.8657 23.1327L20.1247 23.9257C20.2887 24.4317 20.3437 24.5547 20.7677 25.0467Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.625726255594103 30.32421875"
          className={className}
        >
          <path
            d="              M-0.0003 29.189C-0.0003 29.818 0.5197 30.324 1.1347 30.324C1.7637 30.324 2.2837 29.818 2.2837 29.189V1.135C2.2837 0.506 1.7637 0 1.1347 0C0.5197 0 -0.0003 0.506 -0.0003 1.135ZM17.4317 6.002C19.0857 6.002 20.4117 4.662 20.4117 3.022C20.4117 1.367 19.0857 0.041 17.4317 0.041C15.7777 0.041 14.4517 1.367 14.4517 3.022C14.4517 4.662 15.7777 6.002 17.4317 6.002ZM14.3277 29.135L17.1857 23.338C17.3087 23.119 17.3357 22.982 17.6227 22.627L20.3847 19.154C21.4377 17.855 21.7927 17.131 21.6697 15.613L21.4517 12.619C21.4237 12.25 21.9027 12.031 22.2577 12.359L23.2697 13.262L23.5707 16.803C23.6387 17.678 24.1037 18.129 24.8687 18.074C25.6347 18.047 26.0857 17.473 26.0177 16.652L25.7577 13.426C25.6897 12.537 25.4707 11.99 24.7867 11.32L22.6957 9.256C21.3687 7.957 20.3987 7.232 18.9497 7.232C17.0347 7.232 15.9277 8.654 16.0647 10.527L16.3377 14.479C16.4337 15.887 16.6117 16.734 17.0897 18.156L17.2127 18.525L15.4497 21.027C15.1897 21.397 14.8887 21.861 14.6697 22.285L11.8807 27.932C10.9647 29.791 13.4937 30.844 14.3277 29.135ZM9.5837 12.564C8.7637 12.564 8.2167 13.057 8.2167 13.795C8.2167 14.561 8.7497 15.025 9.5837 15.025H12.5237C13.3297 15.025 13.7267 14.889 14.1637 14.451L14.9567 13.658L14.7247 10.363L12.7287 12.564ZM24.3357 29.545C25.4027 30.816 27.5077 29.313 26.2227 27.768L22.1617 22.955L21.5057 19.865L19.3047 22.627L19.6057 23.557C19.7697 24.063 19.8247 24.172 20.2347 24.65Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.84976101448433 31.185546875"
          className={className}
        >
          <path
            d="              M-0.0003 29.6408C-0.0003 30.4878 0.6977 31.1858 1.5447 31.1858C2.4067 31.1858 3.0897 30.4878 3.0897 29.6408V1.5588C3.0897 0.6968 2.4067 -0.0002 1.5447 -0.0002C0.6977 -0.0002 -0.0003 0.6968 -0.0003 1.5588ZM18.3337 6.2888C20.0707 6.2888 21.4647 4.8948 21.4647 3.1578C21.4647 1.4358 20.0707 0.0278 18.3337 0.0278C16.6117 0.0278 15.2027 1.4358 15.2027 3.1578C15.2027 4.8948 16.6117 6.2888 18.3337 6.2888ZM15.2847 29.9278L18.1977 24.0078C18.3207 23.7618 18.3617 23.6388 18.6347 23.2968L21.4647 19.7418C22.5587 18.3748 22.9137 17.5958 22.7907 16.0648L22.5727 13.1248C22.5447 12.7558 22.9827 12.5648 23.3107 12.8648L24.2537 13.7128L24.5687 17.2948C24.6367 18.2248 25.1567 18.7168 25.9767 18.6618C26.7967 18.6348 27.3027 18.0058 27.2347 17.1308L26.9607 13.8218C26.8927 12.8928 26.6467 12.3188 25.9497 11.6208L23.8167 9.5288C22.4497 8.1898 21.4377 7.4238 19.9337 7.4238C17.9377 7.4238 16.7477 8.9008 16.8987 10.8828L17.1717 14.9298C17.2817 16.3518 17.4867 17.2268 17.9517 18.7028L18.0607 19.0308L16.2837 21.5608C15.9957 21.9568 15.7087 22.4218 15.4907 22.8598L12.6327 28.6288C11.6487 30.6248 14.3687 31.7598 15.2847 29.9278ZM10.3497 12.8788C9.4747 12.8788 8.8727 13.4118 8.8727 14.2188C8.8727 15.0388 9.4607 15.5588 10.3497 15.5588H13.3577C14.2187 15.5588 14.6287 15.4078 15.0937 14.9438L15.6817 14.3558L15.4357 10.7868L13.5347 12.8788ZM25.3747 30.3518C26.5237 31.7328 28.8067 30.0918 27.4117 28.4378L23.2837 23.5428L22.6547 20.5628L20.2887 23.5288L20.5077 24.2128C20.6717 24.7328 20.7537 24.8558 21.1777 25.3618Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.48218390953212 28.14226632242684"
          className={className}
        >
          <path
            d="              M-0.0003 27.4942C-0.0003 27.8492 0.2867 28.1362 0.6567 28.1362C1.0257 28.1362 1.3127 27.8492 1.3127 27.4942V0.6562C1.3127 0.2872 1.0257 0.0002 0.6567 0.0002C0.2867 0.0002 -0.0003 0.2872 -0.0003 0.6562ZM15.9277 5.5372C17.4587 5.5372 18.6897 4.3062 18.6897 2.7752C18.6897 1.2442 17.4587 0.0132 15.9277 0.0132C14.3967 0.0132 13.1657 1.2442 13.1657 2.7752C13.1657 4.3062 14.3967 5.5372 15.9277 5.5372ZM12.9067 27.3442L15.5997 21.8752C15.7087 21.6702 15.7227 21.5192 16.0097 21.1912L18.6207 17.9242C19.5917 16.6932 19.9197 16.0372 19.8107 14.6152L19.5917 11.7992C19.5647 11.3752 20.1117 11.1832 20.4527 11.5112L21.4237 12.3732L21.7107 15.7362C21.7797 16.5152 22.1757 16.9262 22.8727 16.8712C23.5567 16.8442 23.9667 16.3382 23.9117 15.5862L23.6797 12.5372C23.5977 11.6892 23.3657 11.2112 22.7637 10.6092L20.7947 8.6682C19.5507 7.4372 18.6487 6.7542 17.3087 6.7542C15.5857 6.7542 14.5057 8.0252 14.6287 9.8302L14.9027 13.5492C14.9847 14.8472 15.1757 15.6542 15.6137 16.9802L15.7227 17.3632L14.0407 19.7562C13.7817 20.1252 13.5077 20.5492 13.3167 20.9312L10.6777 26.2502C9.8437 27.9312 12.1407 28.8882 12.9067 27.3442ZM8.4767 11.7992C7.7247 11.7992 7.2327 12.2362 7.2327 12.8922C7.2327 13.5762 7.7247 14.0132 8.4767 14.0132H11.2387C11.9907 14.0132 12.3317 13.8902 12.7427 13.4802L13.7127 12.5102L13.5077 9.5292L11.4707 11.7992ZM22.4217 27.7132C23.3787 28.8612 25.2797 27.4942 24.1177 26.0992L20.2887 21.5602L19.6057 18.4432L17.6097 20.9452L17.9647 22.0802C18.1157 22.5452 18.1837 22.6402 18.5527 23.1052Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.85967466379307 27.59224484255069"
          className={className}
        >
          <path
            d="              M15.4907 5.4008C16.9807 5.4008 18.1837 4.1968 18.1837 2.6938C18.1837 1.1898 16.9807 -0.0002 15.4907 -0.0002C13.9867 -0.0002 12.7837 1.1898 12.7837 2.6938C12.7837 4.1968 13.9867 5.4008 15.4907 5.4008ZM-0.0003 26.9888C-0.0003 27.2758 0.2187 27.4938 0.5057 27.4938C0.8067 27.4938 1.0257 27.2758 1.0257 26.9888V0.5058C1.0257 0.2188 0.8067 -0.0002 0.5057 -0.0002C0.2187 -0.0002 -0.0003 0.2188 -0.0003 0.5058ZM12.4827 26.8108L15.1347 21.4378C15.2437 21.2328 15.2577 21.0958 15.5317 20.7678L18.1017 17.5548C19.0587 16.3518 19.3727 15.7088 19.2637 14.3148L19.0587 11.5388C19.0177 11.1018 19.5777 10.9378 19.9337 11.2518L20.8907 12.0998L21.1637 15.4078C21.2327 16.1738 21.6157 16.5568 22.2987 16.5158C22.9547 16.4878 23.3377 16.0098 23.2967 15.2718L23.0647 12.2778C22.9957 11.4438 22.7497 10.9648 22.1757 10.3908L20.2477 8.4768C19.0177 7.2738 18.1287 6.6168 16.8297 6.6168C15.1617 6.6168 14.0957 7.8338 14.2187 9.6118L14.4787 13.2758C14.5607 14.5468 14.7517 15.3258 15.1757 16.6388L15.2987 17.0218L13.6447 19.3728C13.3847 19.7558 13.0977 20.1528 12.9197 20.5218L10.3357 25.7438C9.5157 27.3848 11.7437 28.3008 12.4827 26.8108ZM8.1487 11.5668C7.4237 11.5668 6.9457 11.9768 6.9457 12.6188C6.9457 13.2888 7.4237 13.6988 8.1487 13.6988H10.8687C11.5937 13.6988 11.9357 13.5758 12.3317 13.1798L13.3437 12.1678L13.1527 9.2828L11.1017 11.5668ZM21.8617 27.1798C22.7907 28.2868 24.6367 26.9608 23.5017 25.6078L19.7427 21.1508L19.0587 18.0198L17.1177 20.4398L17.4867 21.6288C17.6367 22.1078 17.7047 22.1898 18.0607 22.6408Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
