import { IconProps } from "../../types"

export default function LFourButtonHorizontalFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.701171875 27.0703125"
          className={className}
        >
          <path
            d="              M11.0467 27.0706H22.6547C31.0217 27.0706 33.7017 24.2946 33.7017 15.7636V11.3066C33.7017 2.7756 31.0217 -0.0004 22.6547 -0.0004H11.0467C2.6937 -0.0004 -0.0003 2.7756 -0.0003 11.3066V15.7636C-0.0003 24.2946 2.6937 27.0706 11.0467 27.0706ZM11.3747 19.0036C10.4727 19.0036 9.9527 18.4296 9.9527 17.5136V9.2966C9.9527 8.5176 10.5957 7.8886 11.4027 7.8886C12.1677 7.8886 12.7967 8.5176 12.7967 9.2966V16.6796H14.5747C15.2167 16.6796 15.7367 17.2126 15.7367 17.8556C15.7367 18.4706 15.2167 19.0036 14.5747 19.0036ZM21.6977 19.1816C20.9727 19.1816 20.3577 18.7716 20.3577 17.8286V17.1586H18.1977C17.1177 17.1586 16.5837 16.6246 16.5837 15.6266C16.5837 15.0936 16.7067 14.4786 16.9117 13.8906L18.0747 10.6636C18.5527 9.2696 19.0727 7.9156 20.8637 7.9156C22.1757 7.9156 23.0367 8.6406 23.0367 9.9396V14.9566H23.1467C23.8577 14.9566 24.1857 15.3536 24.1857 16.0506C24.1857 16.6116 23.9667 17.1586 23.1327 17.1586H23.0367V17.8286C23.0367 18.7986 22.4357 19.1816 21.6977 19.1816ZM20.4397 15.0386V10.0486H20.3847L18.8537 14.9296V15.0386Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.9765625 25.798828125"
          className={className}
        >
          <path
            d="              M10.9097 25.7987H22.0667C30.2017 25.7987 32.9767 22.9417 32.9767 15.0117V10.7867C32.9767 2.8577 30.2017 -0.0003 22.0667 -0.0003H10.9097C2.7617 -0.0003 -0.0003 2.8577 -0.0003 10.7867V15.0117C-0.0003 22.9417 2.7617 25.7987 10.9097 25.7987ZM10.8557 18.4027C10.0897 18.4027 9.6657 17.9237 9.6657 17.1447V8.4357C9.6657 7.7657 10.1997 7.2327 10.8687 7.2327C11.5257 7.2327 12.0727 7.7657 12.0727 8.4357V16.4197H14.4237C14.9707 16.4197 15.4217 16.8707 15.4217 17.4177C15.4217 17.9507 14.9707 18.4027 14.4237 18.4027ZM21.4517 18.5797C20.8637 18.5797 20.3027 18.2387 20.3027 17.4047V16.3927H17.6917C16.8167 16.3927 16.3247 15.9007 16.3247 15.0667C16.3247 14.5877 16.4197 14.1097 16.6387 13.5487L18.4437 9.2837C18.8807 8.1617 19.3597 7.2457 20.7407 7.2457C21.8337 7.2457 22.5727 7.8617 22.5727 8.9827V14.4927H22.8727C23.5017 14.4927 23.7887 14.8747 23.7887 15.4357C23.7887 15.9417 23.5567 16.3927 22.8727 16.3927H22.5727V17.4047C22.5727 18.2247 22.0667 18.5797 21.4517 18.5797ZM20.3577 14.5607V9.1737H20.3167L18.3067 14.4647V14.5607Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.359375 26.46875"
          className={className}
        >
          <path
            d="              M10.9787 26.4688H22.3807C30.6387 26.4688 33.3597 23.6528 33.3597 15.4078V11.0608C33.3597 2.8168 30.6387 -0.0002 22.3807 -0.0002H10.9787C2.7207 -0.0002 -0.0003 2.8168 -0.0003 11.0608V15.4078C-0.0003 23.6528 2.7207 26.4688 10.9787 26.4688ZM11.1287 18.7168C10.2947 18.7168 9.8167 18.1838 9.8167 17.3358V8.8868C9.8167 8.1618 10.4047 7.5738 11.1567 7.5738C11.8677 7.5738 12.4547 8.1618 12.4547 8.8868V16.5568H14.5057C15.0937 16.5568 15.5857 17.0488 15.5857 17.6368C15.5857 18.2248 15.0937 18.7168 14.5057 18.7168ZM21.5747 18.8948C20.9177 18.8948 20.3297 18.5258 20.3297 17.6228V16.7888H17.9517C16.9807 16.7888 16.4607 16.2828 16.4607 15.3538C16.4607 14.8478 16.5707 14.3008 16.7887 13.7268L18.2517 10.0078C18.7027 8.7368 19.2087 7.5878 20.8087 7.5878C22.0117 7.5878 22.8187 8.2718 22.8187 9.4878V14.7378H23.0237C23.6937 14.7378 24.0077 15.1208 24.0077 15.7638C24.0077 16.2968 23.7617 16.7888 23.0097 16.7888H22.8187V17.6228C22.8187 18.5258 22.2577 18.8948 21.5747 18.8948ZM20.3987 14.8068V9.6388H20.3577L18.5937 14.7108V14.8068Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 23.953125"
          className={className}
        >
          <path
            d="              M10.2127 23.9527H21.2737C28.9297 23.9527 31.4997 21.0817 31.4997 14.0687V9.8847C31.4997 2.8577 28.9297 -0.0003 21.2737 -0.0003H10.2127C2.5707 -0.0003 -0.0003 2.8577 -0.0003 9.8847V14.0687C-0.0003 21.0817 2.5707 23.9527 10.2127 23.9527ZM20.6587 17.6637C20.2887 17.6637 19.8927 17.4317 19.8927 16.8707V15.1757H16.6387C16.0777 15.1757 15.7087 14.7927 15.7087 14.2457C15.7087 13.9047 15.7777 13.6177 15.9547 13.1937L18.7437 7.3687C19.0587 6.6857 19.4277 6.2757 20.1937 6.2757C20.8907 6.2757 21.4097 6.6717 21.4097 7.4647V13.8767H22.0387C22.4627 13.8767 22.6817 14.1507 22.6817 14.5197C22.6817 14.9027 22.4627 15.1757 22.0387 15.1757H21.4097V16.8707C21.4097 17.3767 21.0687 17.6637 20.6587 17.6637ZM10.1037 17.5137C9.6117 17.5137 9.3247 17.1997 9.3247 16.6797V7.0817C9.3247 6.6587 9.6797 6.2887 10.1177 6.2887C10.5407 6.2887 10.9097 6.6587 10.9097 7.0817V16.1597H14.1227C14.4927 16.1597 14.8067 16.4747 14.8067 16.8297C14.8067 17.1997 14.4927 17.5137 14.1227 17.5137ZM19.9197 13.9047V7.7517H19.8787L17.0767 13.8357V13.9047Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 24.9921875"
          className={className}
        >
          <path
            d="              M10.8147 24.9922H21.6837C29.6817 24.9922 32.4977 22.0802 32.4977 14.5472V10.4592C32.4977 2.9122 29.6817 0.0002 21.6837 0.0002H10.8147C2.8167 0.0002 -0.0003 2.9122 -0.0003 10.4592V14.5472C-0.0003 22.0802 2.8167 24.9922 10.8147 24.9922ZM21.2867 18.1972C20.7947 18.1972 20.2617 17.9102 20.2617 17.1442V15.9142H17.3637C16.6247 15.9142 16.1597 15.4352 16.1597 14.7242C16.1597 14.2732 16.2427 13.8772 16.4747 13.3442L18.6897 8.4082C19.0857 7.4652 19.5507 6.8222 20.6587 6.8222C21.6287 6.8222 22.2847 7.3692 22.2847 8.3812V14.2052H22.7087C23.2837 14.2052 23.5297 14.5602 23.5297 15.0532C23.5297 15.5312 23.2837 15.9142 22.7087 15.9142H22.2847V17.1442C22.2847 17.8692 21.8337 18.1972 21.2867 18.1972ZM10.5277 18.0332C9.8577 18.0332 9.4747 17.5962 9.4747 16.9122V7.8882C9.4747 7.3012 9.9527 6.8222 10.5407 6.8222C11.1287 6.8222 11.6077 7.3012 11.6077 7.8882V16.2422H14.3277C14.8067 16.2422 15.2167 16.6522 15.2167 17.1312C15.2167 17.6232 14.8067 18.0332 14.3277 18.0332ZM20.3167 14.2602V8.6132H20.2617L17.9517 14.1642V14.2602Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 24.541015625"
          className={className}
        >
          <path
            d="              M10.7737 24.5414H21.4647C29.3947 24.5414 32.2387 21.6014 32.2387 14.2874V10.2674C32.2387 2.9534 29.3947 0.0004 21.4647 0.0004H10.7737C2.8437 0.0004 -0.0003 2.9534 -0.0003 10.2674V14.2874C-0.0003 21.6014 2.8437 24.5414 10.7737 24.5414ZM21.1917 17.9784C20.7537 17.9784 20.2477 17.7324 20.2477 17.0074V15.6404H17.1857C16.5157 15.6404 16.0647 15.1894 16.0647 14.5334C16.0647 14.1094 16.1467 13.7534 16.3787 13.2204L18.8127 7.9164C19.1957 7.0684 19.6467 6.5764 20.6177 6.5764C21.5057 6.5764 22.1207 7.1094 22.1207 8.0524V14.0544H22.6137C23.1597 14.0544 23.3927 14.3964 23.3927 14.8344C23.3927 15.2984 23.1467 15.6404 22.6137 15.6404H22.1207V17.0074C22.1207 17.6644 21.7107 17.9784 21.1917 17.9784ZM10.3357 17.8144C9.7207 17.8144 9.3657 17.4314 9.3657 16.7894V7.5744C9.3657 7.0414 9.8167 6.5894 10.3497 6.5894C10.8967 6.5894 11.3477 7.0414 11.3477 7.5744V16.1604H14.2737C14.7247 16.1604 15.1077 16.5294 15.1077 16.9804C15.1077 17.4454 14.7247 17.8144 14.2737 17.8144ZM20.2887 14.0954V8.2984H20.2347L17.7457 14.0004V14.0954Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.703125 25.34765625"
          className={className}
        >
          <path
            d="              M10.8557 25.3479H21.8477C29.9137 25.3479 32.7027 22.4489 32.7027 14.7519V10.5959C32.7027 2.8989 29.9137 -0.0001 21.8477 -0.0001H10.8557C2.7887 -0.0001 -0.0003 2.8989 -0.0003 10.5959V14.7519C-0.0003 22.4489 2.7887 25.3479 10.8557 25.3479ZM21.3557 18.3609C20.8227 18.3609 20.2757 18.0609 20.2757 17.2679V16.1189H17.5137C16.7067 16.1189 16.2287 15.6409 16.2287 14.8749C16.2287 14.4239 16.3247 13.9859 16.5427 13.4399L18.5797 8.7909C18.9907 7.7659 19.4687 6.9999 20.6997 6.9999C21.7247 6.9999 22.4087 7.5879 22.4087 8.6539V14.3419H22.7777C23.3787 14.3419 23.6387 14.6969 23.6387 15.2309C23.6387 15.7229 23.4067 16.1189 22.7777 16.1189H22.4087V17.2679C22.4087 18.0329 21.9297 18.3609 21.3557 18.3609ZM10.6637 18.1969C9.9527 18.1969 9.5567 17.7459 9.5567 17.0219V8.1209C9.5567 7.5059 10.0627 6.9999 10.6917 6.9999C11.2927 6.9999 11.8127 7.5059 11.8127 8.1209V16.3239H14.3687C14.8747 16.3239 15.2987 16.7479 15.2987 17.2679C15.2987 17.7739 14.8747 18.1969 14.3687 18.1969ZM20.3297 14.3969V8.8589H20.2887L18.1017 14.3009V14.3969Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.515625 23.16015625"
          className={className}
        >
          <path
            d="              M9.4887 23.1602H21.0277C28.3147 23.1602 30.5157 20.4122 30.5157 13.7812V9.3792C30.5157 2.7342 28.3147 0.0002 21.0277 0.0002H9.4887C2.2017 0.0002 -0.0003 2.7342 -0.0003 9.3792V13.7812C-0.0003 20.4122 2.2017 23.1602 9.4887 23.1602ZM19.9607 17.2402C19.6737 17.2402 19.4417 17.0492 19.4417 16.7072V14.5472H15.9137C15.4907 14.5472 15.2307 14.2732 15.2307 13.8902C15.2307 13.6442 15.2847 13.4262 15.4087 13.1382L18.6487 6.6582C18.8807 6.1662 19.1407 5.8792 19.6597 5.8792C20.0567 5.8792 20.4527 6.0972 20.4527 6.6992V13.6442H21.2867C21.5607 13.6442 21.7387 13.8362 21.7387 14.0822C21.7387 14.3692 21.5747 14.5472 21.2867 14.5472H20.4527V16.7072C20.4527 17.0082 20.2347 17.2402 19.9607 17.2402ZM9.7887 17.1172C9.4747 17.1172 9.2697 16.8982 9.2697 16.5432V6.4262C9.2697 6.1522 9.5157 5.9062 9.8027 5.9062C10.0897 5.9062 10.3357 6.1522 10.3357 6.4262V16.1742H13.9317C14.1777 16.1742 14.3967 16.3922 14.3967 16.6382C14.3967 16.8982 14.1777 17.1172 13.9317 17.1172ZM19.4417 13.6582V7.0272H19.4007L16.1877 13.6032V13.6582Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.009765625 22.75"
          className={className}
        >
          <path
            d="              M9.1187 22.7501H20.8907C27.9997 22.7501 30.0097 20.0701 30.0097 13.6311V9.1191C30.0097 2.6801 27.9997 0.0001 20.8907 0.0001H9.1187C2.0097 0.0001 -0.0003 2.6801 -0.0003 9.1191V13.6311C-0.0003 20.0701 2.0097 22.7501 9.1187 22.7501ZM19.5917 17.0211C19.3597 17.0211 19.2087 16.8571 19.2087 16.6111V14.2191H15.5447C15.1897 14.2191 14.9847 14.0001 14.9847 13.6991C14.9847 13.5081 15.0257 13.3301 15.1347 13.1111L18.6077 6.2751C18.7987 5.9061 18.9767 5.6601 19.3727 5.6601C19.6467 5.6601 19.9607 5.7971 19.9607 6.3031V13.5211H20.9047C21.0817 13.5211 21.2597 13.6581 21.2597 13.8631C21.2597 14.0961 21.1227 14.2191 20.9047 14.2191H19.9607V16.6111C19.9607 16.8161 19.7967 17.0211 19.5917 17.0211ZM9.6247 16.8981C9.4067 16.8981 9.2427 16.7341 9.2427 16.4751V6.0981C9.2427 5.8921 9.4197 5.7011 9.6527 5.7011C9.8437 5.7011 10.0347 5.8921 10.0347 6.0981V16.1741H13.8357C14.0277 16.1741 14.1917 16.3381 14.1917 16.5291C14.1917 16.7341 14.0277 16.8981 13.8357 16.8981ZM19.1957 13.5211V6.6441H19.1547L15.7367 13.4941V13.5211Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}