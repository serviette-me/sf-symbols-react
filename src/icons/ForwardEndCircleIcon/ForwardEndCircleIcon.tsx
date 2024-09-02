import { IconProps } from "../../types"

export default function ForwardEndCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.5277 19.3731C10.8277 19.3731 11.1017 19.3051 11.3617 19.1541L16.6387 16.0781C16.9117 15.9141 17.1447 15.7361 17.2817 15.5171V18.5391C17.2817 19.1541 17.5957 19.4691 18.2247 19.4691H19.5647C20.2067 19.4691 20.5077 19.1541 20.5077 18.5391V11.3071C20.5077 10.6911 20.1937 10.3771 19.5647 10.3771H18.2247C17.5957 10.3771 17.2817 10.7191 17.2817 11.3071V14.3141C17.1447 14.0961 16.9117 13.9321 16.6387 13.7671L11.3617 10.6911C11.1017 10.5411 10.8277 10.4861 10.5277 10.4861C9.8987 10.4861 9.3657 10.9511 9.3657 11.7581V18.0881C9.3657 18.8941 9.9117 19.3731 10.5277 19.3731Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM9.7207 19.1816C9.9937 19.1816 10.2537 19.1136 10.4997 18.9496L16.4067 15.5036C16.6657 15.3396 16.8707 15.1626 16.9937 14.9566V18.4296C16.9937 19.0316 17.3087 19.3186 17.8967 19.3186H19.2907C19.8927 19.3186 20.1797 19.0316 20.1797 18.4296V10.4586C20.1797 9.8576 19.8787 9.5566 19.2907 9.5566H17.8967C17.3087 9.5566 16.9937 9.8706 16.9937 10.4586V13.9316C16.8707 13.7266 16.6657 13.5626 16.4067 13.3986L10.4997 9.9536C10.2537 9.7886 9.9937 9.7206 9.7207 9.7206C9.1467 9.7206 8.6817 10.1446 8.6817 10.9106V17.9926C8.6817 18.7576 9.1597 19.1816 9.7207 19.1816Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM10.1447 19.2914C10.4317 19.2914 10.7047 19.2224 10.9647 19.0724L16.5297 15.8044C16.8027 15.6544 17.0077 15.4764 17.1447 15.2574V18.4984C17.1447 19.0994 17.4587 19.4144 18.0737 19.4144H19.4417C20.0567 19.4144 20.3577 19.0994 20.3577 18.4984V10.9104C20.3577 10.3084 20.0427 9.9944 19.4417 9.9944H18.0737C17.4587 9.9944 17.1447 10.3224 17.1447 10.9104V14.1364C17.0217 13.9314 16.8027 13.7674 16.5297 13.6034L10.9647 10.3494C10.7047 10.1994 10.4317 10.1304 10.1447 10.1304C9.5427 10.1304 9.0367 10.5824 9.0367 11.3614V18.0474C9.0367 18.8394 9.5567 19.2914 10.1447 19.2914Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM8.6677 18.785C8.8867 18.785 9.1187 18.689 9.3377 18.553L16.1327 14.561C16.3377 14.451 16.4887 14.301 16.5707 14.15V18.197C16.5707 18.717 16.8297 18.963 17.3497 18.963H18.8127C19.3187 18.963 19.5777 18.717 19.5777 18.197V9.229C19.5777 8.709 19.3187 8.463 18.8127 8.463H17.3497C16.8297 8.463 16.5707 8.695 16.5707 9.229V13.33C16.4887 13.18 16.3377 13.029 16.1327 12.92L9.3377 8.928C9.1187 8.791 8.8867 8.709 8.6677 8.709C8.2167 8.709 7.8337 9.037 7.8337 9.693V17.787C7.8337 18.443 8.2167 18.785 8.6677 18.785Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM9.2007 19.0581C9.4607 19.0581 9.7067 18.9761 9.9527 18.8261L16.2557 15.1211C16.5157 14.9711 16.7067 14.7931 16.8167 14.5881V18.3611C16.8167 18.9351 17.1167 19.2231 17.6777 19.2231H19.1137C19.6877 19.2231 19.9887 18.9351 19.9887 18.3611V9.8981C19.9887 9.3241 19.6737 9.0371 19.1137 9.0371H17.6777C17.1167 9.0371 16.8167 9.3241 16.8167 9.8981V13.6991C16.7067 13.4941 16.5157 13.3161 16.2557 13.1521L9.9527 9.4611C9.7067 9.3101 9.4607 9.2281 9.2007 9.2281C8.6817 9.2281 8.2437 9.6251 8.2437 10.3491V17.9371C8.2437 18.6621 8.6817 19.0581 9.2007 19.0581Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM8.9137 18.9764C9.1597 18.9764 9.3927 18.8944 9.6387 18.7444L16.1597 14.9164C16.4337 14.7524 16.6117 14.5744 16.7067 14.3694V18.3204C16.7067 18.8804 17.0077 19.1544 17.5547 19.1544H19.0177C19.5647 19.1544 19.8657 18.8804 19.8657 18.3204V9.5844C19.8657 9.0234 19.5647 8.7364 19.0177 8.7364H17.5547C17.0077 8.7364 16.7067 9.0094 16.7067 9.5844V13.5624C16.6117 13.3574 16.4337 13.1794 16.1597 13.0154L9.6387 9.1874C9.3927 9.0374 9.1597 8.9554 8.9137 8.9554C8.4077 8.9554 7.9977 9.3244 7.9977 10.0354V17.8964C7.9977 18.6074 8.4077 18.9764 8.9137 18.9764Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.4197 19.1129C9.6937 19.1129 9.9397 19.0309 10.1857 18.8809L16.3107 15.2849C16.5837 15.1349 16.7757 14.9569 16.8987 14.7519V18.3889C16.8987 18.9769 17.1987 19.2639 17.7737 19.2639H19.1957C19.7697 19.2639 20.0707 18.9769 20.0707 18.3889V10.1449C20.0707 9.5569 19.7697 9.2699 19.1957 9.2699H17.7737C17.1987 9.2699 16.8987 9.5569 16.8987 10.1449V13.7949C16.7757 13.5899 16.5837 13.4259 16.3107 13.2619L10.1857 9.6799C9.9397 9.5159 9.6937 9.4469 9.4197 9.4469C8.8867 9.4469 8.4357 9.8439 8.4357 10.5959V17.9649C8.4357 18.7029 8.8867 19.1129 9.4197 19.1129Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.3397 18.5252C8.5317 18.5252 8.7637 18.4162 8.9277 18.3202L16.0777 14.1092C16.2147 14.0412 16.3107 13.9452 16.3927 13.8362V18.0472C16.3927 18.5252 16.5837 18.7302 17.0627 18.7302H18.5257C18.9907 18.7302 19.1957 18.5252 19.1957 18.0472V8.7772C19.1957 8.2992 18.9907 8.0942 18.5257 8.0942H17.0627C16.5837 8.0942 16.3927 8.2992 16.3927 8.7772V13.0562C16.3107 12.9472 16.2147 12.8652 16.0777 12.7832L8.9277 8.5862C8.7637 8.4762 8.5317 8.3812 8.3397 8.3812C7.9567 8.3812 7.6157 8.6682 7.6157 9.2562V17.6502C7.6157 18.2382 7.9567 18.5252 8.3397 18.5252Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.1757 18.3751C8.3397 18.3751 8.5727 18.2791 8.7227 18.1831L16.0507 13.8631C16.1467 13.8221 16.2287 13.7541 16.2967 13.6721V17.9651C16.2967 18.4161 16.4607 18.5941 16.9117 18.5941H18.3887C18.8127 18.5941 19.0037 18.4161 19.0037 17.9651V8.5311C19.0037 8.0801 18.8127 7.9021 18.3887 7.9021H16.9117C16.4607 7.9021 16.2967 8.0801 16.2967 8.5311V12.9061C16.2287 12.8241 16.1467 12.7691 16.0507 12.7151L8.7227 8.3941C8.5727 8.3121 8.3397 8.2031 8.1757 8.2031C7.8207 8.2031 7.4917 8.4631 7.4917 9.0231V17.5681C7.4917 18.1151 7.8207 18.3751 8.1757 18.3751Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}