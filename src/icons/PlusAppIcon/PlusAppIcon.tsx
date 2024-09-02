import { IconProps } from "../../types"

export default function PlusAppIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.796875 26.796875"
          className={className}
        >
          <path
            d="              M24.8557 1.9555C23.3927 0.5055 21.5197 -0.0005 18.3337 -0.0005H8.4627C5.2907 -0.0005 3.4047 0.5055 1.9417 1.9555C0.4927 3.4045 -0.0003 5.2495 -0.0003 8.4625V18.3335C-0.0003 21.5465 0.4927 23.3925 1.9417 24.8415C3.4177 26.2905 5.2907 26.7965 8.4627 26.7965H18.3337C21.5197 26.7965 23.4067 26.2905 24.8557 24.8415C26.3047 23.3785 26.7967 21.5465 26.7967 18.3335V8.4625C26.7967 5.2495 26.3047 3.3905 24.8557 1.9555ZM21.9437 8.0805V18.7165C21.9437 20.1935 21.7517 20.8085 21.2867 21.2735C20.8227 21.7245 20.1937 21.9435 18.7307 21.9435H8.0797C6.6177 21.9435 5.9747 21.7245 5.5097 21.2735C5.0587 20.8085 4.8537 20.1935 4.8537 18.7165V8.0805C4.8537 6.5895 5.0587 5.9885 5.5097 5.5235C5.9747 5.0725 6.6177 4.8535 8.0797 4.8535H18.7307C20.1937 4.8535 20.8227 5.0725 21.2867 5.5235C21.7517 5.9885 21.9437 6.5895 21.9437 8.0805ZM7.1777 13.3845C7.1777 14.4515 7.9567 15.2715 9.0097 15.2715H11.5257V17.7875C11.5257 18.8265 12.3317 19.6055 13.4117 19.6055C14.4787 19.6055 15.2987 18.8265 15.2987 17.7875V15.2715H17.8147C18.8537 15.2715 19.6467 14.4515 19.6467 13.3845C19.6467 12.3045 18.8537 11.4845 17.8147 11.4845H15.2987V8.9685C15.2987 7.9295 14.4787 7.1505 13.4117 7.1505C12.3317 7.1505 11.5257 7.9295 11.5257 8.9685V11.4845H9.0097C7.9567 11.4845 7.1777 12.3045 7.1777 13.3845Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.00390625 26.00390625"
          className={className}
        >
          <path
            d="              M24.2267 1.791C22.8047 0.369 20.8767 0 18.1287 0H7.8617C5.1267 0 3.1997 0.369 1.7777 1.791C0.3557 3.213 -0.0003 5.113 -0.0003 7.861V18.129C-0.0003 20.891 0.3417 22.805 1.7777 24.213C3.1997 25.635 5.1267 26.004 7.8747 26.004H18.1287C20.8767 26.004 22.8047 25.635 24.2267 24.213C25.6617 22.791 26.0037 20.891 26.0037 18.129V7.875C26.0037 5.1 25.6617 3.199 24.2267 1.791ZM22.4767 7.492V18.512C22.4767 19.947 22.2847 20.986 21.6427 21.629C20.9997 22.271 19.9477 22.477 18.5117 22.477H7.4927C6.0567 22.477 5.0037 22.271 4.3617 21.629C3.7187 20.986 3.5277 19.947 3.5277 18.512V7.519C3.5277 6.057 3.7187 5.018 4.3617 4.375C5.0037 3.732 6.0707 3.527 7.5197 3.527H18.5117C19.9477 3.527 20.9997 3.732 21.6427 4.375C22.2847 5.018 22.4767 6.057 22.4767 7.492ZM6.7267 12.988C6.7267 13.863 7.3557 14.506 8.2307 14.506H11.4977V17.773C11.4977 18.635 12.1267 19.264 13.0017 19.264C13.8767 19.264 14.5337 18.635 14.5337 17.773V14.506H17.8007C18.6617 14.506 19.2907 13.863 19.2907 12.988C19.2907 12.113 18.6617 11.471 17.8007 11.471H14.5337V8.203C14.5337 7.328 13.8767 6.699 13.0017 6.699C12.1267 6.699 11.4977 7.328 11.4977 8.203V11.471H8.2307C7.3557 11.471 6.7267 12.113 6.7267 12.988Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.427734375 26.427734375"
          className={className}
        >
          <path
            d="              M24.5687 1.8868C23.1057 0.4508 21.2187 -0.0002 18.2387 -0.0002H8.1757C5.2087 -0.0002 3.3087 0.4508 1.8597 1.8868C0.4237 3.3218 -0.0003 5.1958 -0.0003 8.1898V18.2518C-0.0003 21.2458 0.4237 23.1188 1.8597 24.5548C3.3227 25.9898 5.2087 26.4278 8.1897 26.4278H18.2387C21.2187 26.4278 23.1187 25.9898 24.5687 24.5548C26.0037 23.1058 26.4277 21.2458 26.4277 18.2518V8.1898C26.4277 5.1958 26.0037 3.3088 24.5687 1.8868ZM22.2027 7.8068V18.6208C22.2027 20.0838 21.9977 20.8908 21.4647 21.4508C20.9047 21.9978 20.0707 22.2028 18.6207 22.2028H7.8067C6.3577 22.2028 5.5237 21.9848 4.9627 21.4508C4.4297 20.8908 4.2247 20.0838 4.2247 18.6208V7.8208C4.2247 6.3438 4.4297 5.5368 4.9627 4.9898C5.5237 4.4438 6.3577 4.2378 7.8067 4.2378H18.6207C20.0707 4.2378 20.9047 4.4438 21.4647 4.9898C21.9977 5.5368 22.2027 6.3438 22.2027 7.8068ZM6.9587 13.2068C6.9587 14.1918 7.6697 14.9158 8.6407 14.9158H11.5117V17.7868C11.5117 18.7438 12.2367 19.4548 13.2207 19.4548C14.2047 19.4548 14.9297 18.7438 14.9297 17.7868V14.9158H17.8147C18.7717 14.9158 19.4827 14.1918 19.4827 13.2068C19.4827 12.2228 18.7717 11.4848 17.8147 11.4848H14.9297V8.6128C14.9297 7.6558 14.2047 6.9458 13.2207 6.9458C12.2367 6.9458 11.5117 7.6558 11.5117 8.6128V11.4848H8.6407C7.6697 11.4848 6.9587 12.2228 6.9587 13.2068Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 24.6640625"
          className={className}
        >
          <path
            d="              M23.1327 1.5451C21.8617 0.2731 20.0977 0.0001 17.6227 0.0001H6.9457C4.5667 0.0001 2.8027 0.2871 1.5317 1.5451C0.2737 2.8161 -0.0003 4.5661 -0.0003 6.9451V17.6231C-0.0003 20.1111 0.2597 21.8611 1.5177 23.1191C2.8027 24.3771 4.5527 24.6641 7.0277 24.6641H17.6227C20.0977 24.6641 21.8747 24.3771 23.1327 23.1191C24.4047 21.8481 24.6637 20.1111 24.6637 17.6231V7.0271C24.6637 4.5531 24.4047 2.8031 23.1327 1.5451ZM22.9687 6.6721V17.9921C22.9687 19.6191 22.7227 21.0411 21.8887 21.8751C21.0547 22.7231 19.6057 22.9691 17.9927 22.9691H6.6587C5.0587 22.9691 3.6097 22.7091 2.7617 21.8751C1.9277 21.0411 1.6957 19.6191 1.6957 17.9921V6.7541C1.6957 5.0581 1.9277 3.6091 2.7617 2.7751C3.5957 1.9281 5.0727 1.6951 6.7537 1.6951H17.9927C19.6057 1.6951 21.0547 1.9551 21.8887 2.7891C22.7227 3.6231 22.9687 5.0451 22.9687 6.6721ZM6.1247 12.3321C6.1247 12.8241 6.4937 13.1931 7.0277 13.1931H11.4567V17.6371C11.4567 18.1561 11.8267 18.5251 12.3187 18.5251C12.8517 18.5251 13.2207 18.1561 13.2207 17.6371V13.1931H17.6637C18.1697 13.1931 18.5527 12.8241 18.5527 12.3321C18.5527 11.7991 18.1837 11.4301 17.6637 11.4301H13.2207V7.0001C13.2207 6.4671 12.8517 6.0981 12.3187 6.0981C11.8267 6.0981 11.4567 6.4801 11.4567 7.0001V11.4301H7.0277C6.4937 11.4301 6.1247 11.7991 6.1247 12.3321Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 25.484375"
          className={className}
        >
          <path
            d="              M23.8297 1.6683C22.4217 0.2593 20.4807 0.0003 17.9927 0.0003H7.4647C5.0177 0.0003 3.0627 0.2733 1.6677 1.6683C0.2597 3.0763 -0.0003 5.0043 -0.0003 7.4653V17.9783C-0.0003 20.4803 0.2597 22.4083 1.6547 23.8163C3.0767 25.2113 5.0177 25.4843 7.5057 25.4843H17.9927C20.4807 25.4843 22.4217 25.2113 23.8297 23.8163C25.2387 22.4083 25.4977 20.4803 25.4977 17.9783V7.4923C25.4977 5.0043 25.2387 3.0763 23.8297 1.6683ZM22.8187 7.1233V18.3613C22.8187 19.7833 22.6267 21.0823 21.8747 21.8473C21.1097 22.6133 19.7837 22.8043 18.3747 22.8043H7.1227C5.7147 22.8043 4.3887 22.6133 3.6227 21.8473C2.8577 21.0823 2.6797 19.7833 2.6797 18.3613V7.1503C2.6797 5.7013 2.8577 4.3883 3.6097 3.6233C4.3747 2.8573 5.7147 2.6663 7.1507 2.6663H18.3747C19.7837 2.6663 21.1097 2.8713 21.8747 3.6363C22.6407 4.3883 22.8187 5.7013 22.8187 7.1233ZM6.4397 12.7423C6.4397 13.4803 6.9727 14.0003 7.7247 14.0003H11.4707V17.7593C11.4707 18.5113 12.0037 19.0453 12.7427 19.0453C13.4937 19.0453 14.0407 18.5113 14.0407 17.7593V14.0003H17.8007C18.5387 14.0003 19.0727 13.4803 19.0727 12.7423C19.0727 11.9763 18.5527 11.4433 17.8007 11.4433H14.0407V7.6973C14.0407 6.9313 13.4937 6.3983 12.7427 6.3983C12.0037 6.3983 11.4707 6.9313 11.4707 7.6973V11.4433H7.7247C6.9587 11.4433 6.4397 11.9763 6.4397 12.7423Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.2109375 25.2109375"
          className={className}
        >
          <path
            d="              M23.6117 1.6136C22.2167 0.2186 20.2477 -0.0004 17.9097 -0.0004H7.2597C4.9627 -0.0004 2.9937 0.2186 1.5997 1.6136C0.2047 3.0076 -0.0003 4.9626 -0.0003 7.2596V17.9106C-0.0003 20.2476 0.2047 22.2036 1.5997 23.5976C2.9937 24.9926 4.9627 25.2106 7.2867 25.2106H17.9097C20.2477 25.2106 22.2167 24.9926 23.6117 23.5976C25.0057 22.2036 25.2107 20.2476 25.2107 17.9106V7.2876C25.2107 4.9496 25.0057 3.0076 23.6117 1.6136ZM23.0097 6.9176V18.2926C23.0097 19.7016 22.8317 21.1636 21.9977 21.9846C21.1777 22.8186 19.7017 23.0096 18.2927 23.0096H6.9177C5.5097 23.0096 4.0337 22.8186 3.1997 21.9846C2.3787 21.1636 2.2017 19.7016 2.2017 18.2926V6.9586C2.2017 5.5096 2.3787 4.0466 3.1997 3.2126C4.0337 2.3926 5.5237 2.2016 6.9587 2.2016H18.2927C19.7017 2.2016 21.1777 2.3926 21.9977 3.2266C22.8317 4.0466 23.0097 5.5096 23.0097 6.9176ZM6.2757 12.6056C6.2757 13.2756 6.7537 13.7266 7.4517 13.7266H11.4707V17.7596C11.4707 18.4436 11.9217 18.9216 12.5917 18.9216C13.2757 18.9216 13.7537 18.4566 13.7537 17.7596V13.7266H17.7867C18.4707 13.7266 18.9497 13.2756 18.9497 12.6056C18.9497 11.9216 18.4707 11.4436 17.7867 11.4436H13.7537V7.4236C13.7537 6.7266 13.2757 6.2476 12.5917 6.2476C11.9217 6.2476 11.4707 6.7266 11.4707 7.4236V11.4436H7.4517C6.7407 11.4436 6.2757 11.9216 6.2757 12.6056Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.716796875 25.716796875"
          className={className}
        >
          <path
            d="              M24.0077 1.7363C22.5857 0.3143 20.6447 0.0003 18.0467 0.0003H7.6427C5.0727 0.0003 3.1177 0.3143 1.7087 1.7363C0.3007 3.1443 -0.0003 5.0583 -0.0003 7.6423V18.0603C-0.0003 20.6723 0.3007 22.5863 1.7087 23.9943C3.1307 25.4023 5.0587 25.7163 7.6697 25.7163H18.0467C20.6447 25.7163 22.5857 25.4023 24.0077 23.9943C25.4157 22.5863 25.7167 20.6723 25.7167 18.0603V7.6703C25.7167 5.0583 25.4157 3.1313 24.0077 1.7363ZM22.6677 7.2873V18.4293C22.6677 19.8653 22.4767 21.0543 21.7797 21.7653C21.0687 22.4763 19.8517 22.6813 18.4297 22.6813H7.2867C5.8657 22.6813 4.6487 22.4763 3.9377 21.7653C3.2267 21.0543 3.0487 19.8653 3.0487 18.4293V7.3143C3.0487 5.8653 3.2267 4.6753 3.9377 3.9653C4.6487 3.2543 5.8657 3.0483 7.3147 3.0483H18.4297C19.8517 3.0483 21.0687 3.2543 21.7797 3.9653C22.4907 4.6753 22.6677 5.8653 22.6677 7.2873ZM6.5627 12.8513C6.5627 13.6583 7.1367 14.2323 7.9437 14.2323H11.4847V17.7733C11.4847 18.5803 12.0587 19.1543 12.8517 19.1543C13.6587 19.1543 14.2457 18.5803 14.2457 17.7733V14.2323H17.8007C18.5937 14.2323 19.1677 13.6583 19.1677 12.8513C19.1677 12.0453 18.5937 11.4703 17.8007 11.4703H14.2457V7.9293C14.2457 7.1093 13.6587 6.5483 12.8517 6.5483C12.0587 6.5483 11.4847 7.1093 11.4847 7.9293V11.4703H7.9437C7.1367 11.4703 6.5627 12.0453 6.5627 12.8513Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.939453125 23.92578125"
          className={className}
        >
          <path
            d="              M22.5037 1.436C21.3967 0.342 19.9197 0 17.2407 0H6.5487C4.0467 0 2.5297 0.355 1.4357 1.449C0.3417 2.543 -0.0003 4.033 -0.0003 6.535V17.24C-0.0003 19.92 0.3277 21.41 1.4217 22.49C2.5297 23.584 4.0197 23.926 6.6857 23.926H17.2407C19.9197 23.926 21.4097 23.584 22.5037 22.49C23.5977 21.396 23.9397 19.92 23.9397 17.24V6.686C23.9397 4.006 23.5977 2.516 22.5037 1.436ZM22.9137 6.33V17.596C22.9137 19.482 22.5727 20.877 21.7387 21.725C20.8907 22.586 19.4827 22.914 17.5957 22.914H6.3297C4.4567 22.914 3.0347 22.572 2.1877 21.725C1.3397 20.877 1.0117 19.482 1.0117 17.596V6.467C1.0117 4.457 1.3397 3.035 2.1737 2.188C3.0217 1.326 4.4847 1.012 6.4807 1.012H17.5957C19.4827 1.012 20.8907 1.354 21.7387 2.201C22.5857 3.049 22.9137 4.43 22.9137 6.33ZM5.9337 11.963C5.9337 12.236 6.1657 12.469 6.4667 12.469H11.4437V17.459C11.4437 17.746 11.6757 17.992 11.9627 17.992C12.2637 17.992 12.5097 17.76 12.5097 17.459V12.469H17.4867C17.7867 12.469 18.0197 12.236 18.0197 11.963C18.0197 11.648 17.8007 11.416 17.4867 11.416H12.5097V6.439C12.5097 6.125 12.2637 5.893 11.9627 5.893C11.6757 5.893 11.4437 6.139 11.4437 6.439V11.416H6.4667C6.1527 11.416 5.9337 11.648 5.9337 11.963Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.556640625 23.5703125"
          className={className}
        >
          <path
            d="              M22.1897 1.3942C21.1637 0.3833 19.8107 0.0003 17.0487 0.0003H6.3297C3.7867 0.0003 2.3927 0.4103 1.3947 1.4082C0.3827 2.4202 -0.0003 3.7602 -0.0003 6.3302V17.0493C-0.0003 19.8383 0.3687 21.1913 1.3807 22.1763C2.3927 23.1743 3.7457 23.5703 6.5077 23.5703H17.0487C19.8107 23.5703 21.1777 23.1743 22.1897 22.1763C23.1877 21.1643 23.5567 19.8383 23.5567 17.0493V6.5083C23.5567 3.7323 23.1877 2.3792 22.1897 1.3942ZM22.8867 6.1663V17.4043C22.8867 19.4413 22.5037 20.7953 21.6697 21.6563C20.8087 22.5313 19.4137 22.9003 17.4047 22.9003H6.1657C4.1427 22.9003 2.7477 22.5043 1.9007 21.6563C1.0387 20.7953 0.6697 19.4413 0.6697 17.4043V6.3432C0.6697 4.1702 1.0387 2.7482 1.8727 1.9002C2.7347 1.0252 4.1837 0.6702 6.3437 0.6702H17.4047C19.4137 0.6702 20.8087 1.0523 21.6697 1.9142C22.5177 2.7752 22.8867 4.1292 22.8867 6.1663ZM5.8247 11.7853C5.8247 11.9492 6.0017 12.1133 6.1797 12.1133H11.4437V17.3773C11.4437 17.5543 11.6077 17.7323 11.7717 17.7323C11.9767 17.7323 12.1407 17.5823 12.1407 17.3773V12.1133H17.4047C17.5817 12.1133 17.7457 11.9492 17.7457 11.7853C17.7457 11.5803 17.5957 11.4163 17.4047 11.4163H12.1407V6.1523C12.1407 5.9613 11.9767 5.8103 11.7717 5.8103C11.6077 5.8103 11.4437 5.9742 11.4437 6.1523V11.4163H6.1797C5.9747 11.4163 5.8247 11.5803 5.8247 11.7853Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}