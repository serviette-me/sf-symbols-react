import { IconProps } from "../../types"

export default function SquareOnSquareSquareshapeControlhandlesIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.294921875 31.294921875"
          className={className}
        >
          <path
            d="              M4.5117 31.295C6.1247 31.295 7.5337 30.461 8.3397 29.203H22.9547C23.7617 30.461 25.1697 31.295 26.7697 31.295C29.2847 31.295 31.2947 29.271 31.2947 26.769C31.2947 25.156 30.4607 23.748 29.2027 22.955V8.326C30.4607 7.533 31.2947 6.125 31.2947 4.512C31.2947 2.01 29.2847 0 26.7697 0C25.1697 0 23.7617 0.834 22.9547 2.092H8.3397C7.5337 0.834 6.1247 0 4.5117 0C2.0097 0 -0.0003 2.01 -0.0003 4.512C-0.0003 6.125 0.8337 7.533 2.0917 8.326V22.955C0.8337 23.748 -0.0003 25.156 -0.0003 26.769C-0.0003 29.271 2.0097 31.295 4.5117 31.295ZM8.6677 24.978C8.2167 23.926 7.3687 23.064 6.3027 22.613V8.668C7.3687 8.217 8.2167 7.369 8.6677 6.303H22.6267C23.0777 7.369 23.9257 8.217 24.9927 8.668V22.613C23.9257 23.064 23.0777 23.926 22.6267 24.978ZM10.2407 19.496H11.6897V20.959C11.6897 22.039 12.3597 22.723 13.4397 22.723H21.0687C22.1487 22.723 22.8187 22.039 22.8187 20.959V13.521C22.8187 12.441 22.1487 11.785 21.0687 11.785H19.6327V10.322C19.6327 9.242 18.9497 8.572 17.8687 8.572H10.2407C9.1597 8.572 8.5037 9.242 8.5037 10.322V17.76C8.5037 18.84 9.1597 19.496 10.2407 19.496ZM11.0467 17.158C10.9097 17.158 10.8557 17.09 10.8557 16.953V11.115C10.8557 10.978 10.9097 10.924 11.0467 10.924H17.0767C17.2127 10.924 17.2677 10.978 17.2677 11.115V11.785H13.4397C12.3597 11.785 11.6897 12.441 11.6897 13.521V17.158ZM14.2327 20.371C14.1097 20.371 14.0547 20.316 14.0547 20.166V14.328C14.0547 14.191 14.1097 14.137 14.2327 14.137H20.2617C20.4117 14.137 20.4667 14.191 20.4667 14.328V20.166C20.4667 20.316 20.4117 20.371 20.2617 20.371Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.146484375 30.146484375"
          className={className}
        >
          <path
            d="              M3.8417 30.1468C5.3317 30.1468 6.6307 29.2988 7.2597 28.0688H22.8867C23.5297 29.2988 24.8147 30.1468 26.3047 30.1468C28.4377 30.1468 30.1467 28.4238 30.1467 26.3048C30.1467 24.8008 29.3127 23.5158 28.0687 22.8868V7.2598C29.3127 6.6168 30.1467 5.3318 30.1467 3.8418C30.1467 1.7088 28.4377 -0.0002 26.3047 -0.0002C24.8147 -0.0002 23.5297 0.8338 22.8867 2.0778H7.2597C6.6307 0.8338 5.3317 -0.0002 3.8417 -0.0002C1.7087 -0.0002 -0.0003 1.7088 -0.0003 3.8418C-0.0003 5.3318 0.8477 6.6168 2.0777 7.2598V22.8868C0.8477 23.5158 -0.0003 24.8008 -0.0003 26.3048C-0.0003 28.4238 1.7087 30.1468 3.8417 30.1468ZM7.4097 24.8558C7.0137 23.8848 6.2477 23.1188 5.2907 22.7358V7.3968C6.2477 7.0138 7.0137 6.2478 7.4097 5.2778H22.7367C23.1327 6.2478 23.8987 7.0138 24.8557 7.3968V22.7358C23.8987 23.1188 23.1327 23.8848 22.7367 24.8558ZM9.4747 19.0858H10.9787V20.6038C10.9787 21.6838 11.6347 22.3398 12.7147 22.3398H20.7127C21.8067 22.3398 22.4497 21.6838 22.4497 20.6038V12.7698C22.4497 11.7028 21.7927 11.0608 20.6997 11.0608H19.2087V9.5288C19.2087 8.4488 18.5667 7.8068 17.4727 7.8068H9.4747C8.3947 7.8068 7.7517 8.4488 7.7517 9.5288V17.3628C7.7517 18.4438 8.3947 19.0858 9.4747 19.0858ZM10.1587 17.0078C9.9397 17.0078 9.8167 16.8988 9.8167 16.6798V10.1988C9.8167 9.9808 9.9397 9.8708 10.1587 9.8708H16.8167C17.0217 9.8708 17.1307 9.9808 17.1307 10.1988V11.0608H12.7147C11.6347 11.0608 10.9787 11.7028 10.9787 12.7698V17.0078ZM13.3847 20.2758C13.1797 20.2758 13.0567 20.1528 13.0567 19.9338V13.4528C13.0567 13.2348 13.1797 13.1248 13.3847 13.1248H20.0297C20.2617 13.1248 20.3707 13.2348 20.3707 13.4528V19.9338C20.3707 20.1528 20.2617 20.2758 20.0427 20.2758Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.748046875 30.76171875"
          className={className}
        >
          <path
            d="              M4.1977 30.7613C5.7557 30.7613 7.1097 29.9273 7.8337 28.6703H22.9137C23.6387 29.9273 24.9927 30.7613 26.5507 30.7613C28.8747 30.7613 30.7477 28.8883 30.7477 26.5643C30.7477 25.0063 29.9137 23.6523 28.6697 22.9273V7.8343C29.9137 7.1093 30.7477 5.7563 30.7477 4.2113C30.7477 1.8733 28.8747 0.0003 26.5507 0.0003C24.9927 0.0003 23.6387 0.8473 22.9137 2.0923H7.8337C7.1097 0.8473 5.7557 0.0003 4.1977 0.0003C1.8727 0.0003 -0.0003 1.8733 -0.0003 4.2113C-0.0003 5.7563 0.8337 7.1093 2.0917 7.8343V22.9273C0.8337 23.6523 -0.0003 25.0063 -0.0003 26.5643C-0.0003 28.8883 1.8727 30.7613 4.1977 30.7613ZM8.0797 24.9373C7.6567 23.9123 6.8357 23.1053 5.8247 22.6813V8.0803C6.8357 7.6563 7.6567 6.8493 8.0797 5.8383H22.6817C23.1057 6.8493 23.9117 7.6563 24.9237 8.0803V22.6813C23.9117 23.1053 23.1057 23.9123 22.6817 24.9373ZM9.8847 19.3183H11.3477V20.8083C11.3477 21.8883 12.0177 22.5453 13.0977 22.5453H20.9047C21.9847 22.5453 22.6407 21.8883 22.6407 20.8083V13.1793C22.6407 12.0993 21.9847 11.4573 20.8907 11.4573H19.4277V9.9533C19.4277 8.8863 18.7717 8.2173 17.6917 8.2173H9.8847C8.8047 8.2173 8.1487 8.8863 8.1487 9.9533V17.5823C8.1487 18.6623 8.8047 19.3183 9.8847 19.3183ZM10.6227 17.1033C10.4457 17.1033 10.3637 17.0213 10.3637 16.8303V10.6913C10.3637 10.5133 10.4457 10.4313 10.6227 10.4313H16.9527C17.1177 10.4313 17.1997 10.5133 17.1997 10.6913V11.4573H13.0977C12.0177 11.4573 11.3477 12.0993 11.3477 13.1793V17.1033ZM13.8357 20.3303C13.6717 20.3303 13.5897 20.2483 13.5897 20.0703V13.9313C13.5897 13.7543 13.6717 13.6723 13.8357 13.6723H20.1527C20.3297 13.6723 20.4257 13.7543 20.4257 13.9313V20.0703C20.4257 20.2483 20.3437 20.3303 20.1657 20.3303Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.232421875 28.232421875"
          className={className}
        >
          <path
            d="              M2.9257 28.2328C4.2387 28.2328 5.3597 27.3578 5.7147 26.1548H22.5177C22.8727 27.3578 23.9937 28.2328 25.3067 28.2328C26.9197 28.2328 28.2327 26.9198 28.2327 25.3068C28.2327 23.9808 27.3577 22.8728 26.1547 22.5038V5.7148C27.3577 5.3458 28.2327 4.2378 28.2327 2.9118C28.2327 1.2988 26.9197 -0.0002 25.3067 -0.0002C23.9937 -0.0002 22.8727 0.8748 22.5177 2.0648H5.7147C5.3597 0.8748 4.2387 -0.0002 2.9257 -0.0002C1.3127 -0.0002 -0.0003 1.2988 -0.0003 2.9118C-0.0003 4.2378 0.8747 5.3458 2.0777 5.7148V22.5038C0.8747 22.8728 -0.0003 23.9808 -0.0003 25.3068C-0.0003 26.9198 1.3127 28.2328 2.9257 28.2328ZM5.7147 24.4588C5.4417 23.5288 4.7027 22.7908 3.7737 22.5038V5.7148C4.7027 5.4278 5.4417 4.6898 5.7147 3.7598H22.5177C22.7907 4.7028 23.5297 5.4278 24.4727 5.7148V22.5038C23.5297 22.7908 22.7907 23.5288 22.5177 24.4588ZM8.4357 18.1558H10.0627V19.7828C10.0627 20.8908 10.6777 21.5198 11.7987 21.5198H19.8517C20.9727 21.5198 21.5877 20.8908 21.5877 19.7828V11.8128C21.5877 10.7048 20.9457 10.0898 19.7697 10.0898H18.2387V8.4488C18.2387 7.3418 17.6227 6.7268 16.5017 6.7268H8.4357C7.3277 6.7268 6.6997 7.3418 6.6997 8.4488V16.4198C6.6997 17.5278 7.3277 18.1558 8.4357 18.1558ZM8.8047 16.7348C8.3677 16.7348 8.1207 16.4878 8.1207 16.0508V8.8318C8.1207 8.3808 8.3677 8.1488 8.8047 8.1488H16.1327C16.5837 8.1488 16.8167 8.3808 16.8167 8.8318V10.0898H11.7987C10.6777 10.0898 10.0627 10.7048 10.0627 11.8128V16.7348ZM12.1677 20.0978C11.7167 20.0978 11.4707 19.8518 11.4707 19.4138V12.1958C11.4707 11.7438 11.7167 11.5118 12.1677 11.5118H19.4007C19.9067 11.5118 20.1657 11.7438 20.1657 12.1958V19.4138C20.1657 19.8518 19.9337 20.0978 19.4827 20.0978Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.421875 29.421875"
          className={className}
        >
          <path
            d="              M3.4047 29.4224C4.8267 29.4224 6.0297 28.5744 6.5487 27.3434H22.8597C23.3787 28.5744 24.5957 29.4224 26.0037 29.4224C27.8907 29.4224 29.4217 27.9044 29.4217 26.0044C29.4217 24.5954 28.5607 23.3924 27.3437 22.8734V6.5484C28.5607 6.0434 29.4217 4.8264 29.4217 3.4184C29.4217 1.5314 27.8907 0.0004 26.0037 0.0004C24.5957 0.0004 23.3787 0.8614 22.8597 2.0784H6.5487C6.0297 0.8614 4.8267 0.0004 3.4047 0.0004C1.5177 0.0004 -0.0003 1.5314 -0.0003 3.4184C-0.0003 4.8264 0.8477 6.0434 2.0647 6.5484V22.8734C0.8477 23.3924 -0.0003 24.5954 -0.0003 26.0044C-0.0003 27.9044 1.5177 29.4224 3.4047 29.4224ZM6.5897 24.7874C6.2477 23.8844 5.5367 23.1734 4.6347 22.8184V6.6034C5.5367 6.2614 6.2477 5.5374 6.5897 4.6344H22.8187C23.1597 5.5374 23.8847 6.2614 24.7737 6.6034V22.8184C23.8847 23.1734 23.1597 23.8844 22.8187 24.7874ZM8.9827 18.8264H10.5407V20.3844C10.5407 21.4784 11.1697 22.1074 12.2497 22.1074H20.4937C21.5747 22.1074 22.2167 21.4784 22.2167 20.3844V12.3044C22.2167 11.2384 21.5747 10.6094 20.4667 10.6094H18.9497V9.0234C18.9497 7.9574 18.3067 7.3284 17.2267 7.3284H8.9827C7.9027 7.3284 7.2737 7.9574 7.2737 9.0234V17.1034C7.2737 18.1974 7.9027 18.8264 8.9827 18.8264ZM9.5707 16.9394C9.3107 16.9394 9.1597 16.7894 9.1597 16.5154V9.6254C9.1597 9.3654 9.3107 9.2144 9.5707 9.2144H16.6387C16.8987 9.2144 17.0487 9.3654 17.0487 9.6254V10.6094H12.2497C11.1697 10.6094 10.5407 11.2384 10.5407 12.3044V16.9394ZM12.8377 20.2204C12.5777 20.2204 12.4277 20.0704 12.4277 19.8104V12.9064C12.4277 12.6464 12.5777 12.4964 12.8377 12.4964H19.8787C20.1657 12.4964 20.3167 12.6464 20.3167 12.9064V19.8104C20.3167 20.0704 20.1797 20.2204 19.9067 20.2204Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.998046875 29.01171875"
          className={className}
        >
          <path
            d="              M3.1717 29.0113C4.5387 29.0113 5.6877 28.1503 6.1387 26.9473H22.8597C23.3107 28.1503 24.4727 29.0113 25.8397 29.0113C27.5897 29.0113 28.9977 27.5903 28.9977 25.8403C28.9977 24.4723 28.1507 23.3103 26.9337 22.8733V6.1523C28.1507 5.7013 28.9977 4.5393 28.9977 3.1723C28.9977 1.4223 27.5897 0.0003 25.8397 0.0003C24.4727 0.0003 23.3107 0.8613 22.8597 2.0783H6.1387C5.6877 0.8613 4.5387 0.0003 3.1717 0.0003C1.4087 0.0003 -0.0003 1.4223 -0.0003 3.1723C-0.0003 4.5393 0.8617 5.7013 2.0647 6.1383V22.8733C0.8617 23.3103 -0.0003 24.4723 -0.0003 25.8403C-0.0003 27.5903 1.4087 29.0113 3.1717 29.0113ZM6.1387 24.7463C5.8247 23.8713 5.1267 23.1873 4.2657 22.8733V6.1523C5.1267 5.8243 5.8247 5.1403 6.1387 4.2793H22.8597C23.1877 5.1403 23.8707 5.8243 24.7327 6.1383V22.8733C23.8707 23.1873 23.1877 23.8713 22.8597 24.7463ZM8.7087 18.6753H10.2817V20.2613C10.2817 21.3553 10.9097 21.9703 11.9907 21.9703H20.3707C21.4517 21.9703 22.0797 21.3553 22.0797 20.2613V12.0453C22.0797 10.9653 21.4377 10.3493 20.3297 10.3493H18.7987V8.7503C18.7987 7.6703 18.1697 7.0413 17.0767 7.0413H8.7087C7.6287 7.0413 6.9997 7.6703 6.9997 8.7503V16.9673C6.9997 18.0473 7.6287 18.6753 8.7087 18.6753ZM9.2557 16.8843C8.9547 16.8843 8.7907 16.7203 8.7907 16.4203V9.2973C8.7907 9.0093 8.9547 8.8323 9.2557 8.8323H16.5427C16.8437 8.8323 17.0077 9.0093 17.0077 9.2973V10.3493H11.9907C10.9097 10.3493 10.2817 10.9653 10.2817 12.0453V16.8843ZM12.5367 20.1793C12.2367 20.1793 12.0727 20.0153 12.0727 19.7283V12.5923C12.0727 12.3043 12.2367 12.1403 12.5367 12.1403H19.7837C20.1117 12.1403 20.2887 12.3043 20.2887 12.5923V19.7283C20.2887 20.0153 20.1247 20.1793 19.8247 20.1793Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.736328125 29.72265625"
          className={className}
        >
          <path
            d="              M3.5957 29.7228C5.0447 29.7228 6.2887 28.8888 6.8637 27.6578H22.8727C23.4477 28.8888 24.6917 29.7228 26.1407 29.7228C28.1227 29.7228 29.7367 28.1228 29.7367 26.1268C29.7367 24.6778 28.8887 23.4478 27.6587 22.8728V6.8638C28.8887 6.2888 29.7367 5.0448 29.7367 3.5957C29.7367 1.5998 28.1227 -0.0003 26.1407 -0.0003C24.6917 -0.0003 23.4477 0.8478 22.8727 2.0778H6.8637C6.2887 0.8478 5.0447 -0.0003 3.5957 -0.0003C1.5997 -0.0003 -0.0003 1.5998 -0.0003 3.5957C-0.0003 5.0448 0.8477 6.2888 2.0777 6.8638V22.8728C0.8477 23.4478 -0.0003 24.6778 -0.0003 26.1268C-0.0003 28.1228 1.5997 29.7228 3.5957 29.7228ZM6.9457 24.8148C6.5767 23.8848 5.8377 23.1468 4.9217 22.7778V6.9458C5.8377 6.5758 6.5767 5.8378 6.9457 4.9078H22.7907C23.1467 5.8378 23.8847 6.5758 24.8147 6.9458V22.7778C23.8847 23.1468 23.1467 23.8848 22.7907 24.8148ZM9.2017 18.9358H10.7327V20.4808C10.7327 21.5608 11.3747 22.2028 12.4547 22.2028H20.5897C21.6697 22.2028 22.3127 21.5608 22.3127 20.4808V12.5098C22.3127 11.4298 21.6697 10.8008 20.5627 10.8008H19.0587V9.2418C19.0587 8.1618 18.4157 7.5197 17.3357 7.5197H9.2017C8.1077 7.5197 7.4787 8.1618 7.4787 9.2418V17.2128C7.4787 18.2927 8.1077 18.9358 9.2017 18.9358ZM9.8297 16.9668C9.5837 16.9668 9.4477 16.8298 9.4477 16.5838V9.8707C9.4477 9.6248 9.5837 9.4888 9.8297 9.4888H16.7067C16.9527 9.4888 17.0897 9.6248 17.0897 9.8707V10.8008H12.4547C11.3747 10.8008 10.7327 11.4298 10.7327 12.5098V16.9668ZM13.0707 20.2347C12.8377 20.2347 12.7017 20.1118 12.7017 19.8648V13.1388C12.7017 12.8928 12.8377 12.7698 13.0707 12.7698H19.9337C20.2067 12.7698 20.3437 12.8928 20.3437 13.1388V19.8648C20.3437 20.1118 20.2067 20.2347 19.9607 20.2347Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.220703125 27.20703125"
          className={className}
        >
          <path
            d="              M2.5977 27.2069C3.8557 27.2069 4.9087 26.3179 5.1407 25.1289H22.0667C22.3127 26.3179 23.3657 27.2069 24.6227 27.2069C26.0447 27.2069 27.2207 26.0449 27.2207 24.6229C27.2207 23.3649 26.3187 22.3129 25.1287 22.0659V5.1409C26.3187 4.9079 27.2207 3.8559 27.2207 2.5979C27.2207 1.1619 26.0447 -0.0001 24.6227 -0.0001C23.3657 -0.0001 22.3127 0.9019 22.0667 2.0919H5.1407C4.9087 0.9019 3.8557 -0.0001 2.5977 -0.0001C1.1617 -0.0001 -0.0003 1.1619 -0.0003 2.5979C-0.0003 3.8559 0.9027 4.9079 2.0917 5.1409V22.0659C0.9027 22.3129 -0.0003 23.3649 -0.0003 24.6229C-0.0003 26.0449 1.1617 27.2069 2.5977 27.2069ZM5.1407 24.1039C4.9357 23.0779 4.1287 22.2719 3.1037 22.0659V5.1409C4.1287 4.9359 4.9357 4.1289 5.1407 3.1039H22.0667C22.2717 4.1289 23.0917 4.9359 24.1037 5.1409V22.0659C23.0917 22.2719 22.2717 23.0779 22.0667 24.1039ZM8.0797 17.4729H9.7617V19.1539C9.7617 20.3029 10.3767 20.9179 11.5257 20.9179H19.1817C20.3297 20.9179 20.9457 20.3029 20.9457 19.1539V11.5249C20.9457 10.3769 20.2887 9.7619 19.0317 9.7619H17.4997V8.0799C17.4997 6.9319 16.8847 6.3159 15.7367 6.3159H8.0797C6.9177 6.3159 6.3167 6.9319 6.3167 8.0799V15.7089C6.3167 16.8569 6.9177 17.4729 8.0797 17.4729ZM8.2167 16.5429C7.5747 16.5429 7.2327 16.2009 7.2327 15.5719V8.2309C7.2327 7.5879 7.5747 7.2459 8.2167 7.2459H15.5997C16.2287 7.2459 16.5707 7.5879 16.5707 8.2309V9.7619H11.5257C10.3767 9.7619 9.7617 10.3769 9.7617 11.5249V16.5429ZM11.6617 19.9879C11.0197 19.9879 10.6917 19.6599 10.6917 19.0179V11.6759C10.6917 11.0329 11.0197 10.6909 11.6617 10.6909H18.8947C19.6327 10.6909 20.0157 11.0329 20.0157 11.6759V19.0179C20.0157 19.6599 19.6877 19.9879 19.0447 19.9879Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.6875 26.6875"
          className={className}
        >
          <path
            d="              M2.4337 26.6872C3.6507 26.6872 4.6757 25.7712 4.8397 24.5962H21.8617C22.0257 25.7712 23.0367 26.6872 24.2677 26.6872C25.5937 26.6872 26.6877 25.5942 26.6877 24.2672C26.6877 23.0372 25.7717 22.0252 24.5957 21.8612V4.8402C25.7717 4.6762 26.6877 3.6502 26.6877 2.4332C26.6877 1.0942 25.5937 0.0002 24.2677 0.0002C23.0367 0.0002 22.0257 0.9162 21.8617 2.0922H4.8397C4.6757 0.9162 3.6507 0.0002 2.4337 0.0002C1.0937 0.0002 -0.0003 1.0942 -0.0003 2.4332C-0.0003 3.6502 0.9157 4.6762 2.0917 4.8402V21.8612C0.9157 22.0252 -0.0003 23.0372 -0.0003 24.2672C-0.0003 25.5942 1.0937 26.6872 2.4337 26.6872ZM4.8397 23.9262C4.6897 22.8592 3.8277 22.0122 2.7617 21.8612V4.8402C3.8277 4.6892 4.6897 3.8282 4.8397 2.7622H21.8617C22.0117 3.8282 22.8597 4.6892 23.9257 4.8402V21.8612C22.8597 22.0122 22.0117 22.8592 21.8617 23.9262ZM7.8887 17.1312H9.5977V18.8402C9.5977 20.0022 10.2127 20.6172 11.3887 20.6172H18.8397C20.0017 20.6172 20.6177 20.0022 20.6177 18.8402V11.3882C20.6177 10.2132 19.9477 9.5972 18.6617 9.5972H17.1177V7.8882C17.1177 6.7132 16.5157 6.1112 15.3397 6.1112H7.8887C6.7127 6.1112 6.1117 6.7132 6.1117 7.8882V15.3402C6.1117 16.5152 6.7127 17.1312 7.8887 17.1312ZM7.9157 16.4472C7.1777 16.4472 6.7817 16.0642 6.7817 15.3122V7.9162C6.7817 7.1782 7.1777 6.7812 7.9157 6.7812H15.3127C16.0647 6.7812 16.4477 7.1782 16.4477 7.9162V9.5972H11.3887C10.2127 9.5972 9.5977 10.2132 9.5977 11.3882V16.4472ZM11.4157 19.9472C10.6637 19.9472 10.2817 19.5512 10.2817 18.8122V11.4022C10.2817 10.6642 10.6637 10.2812 11.4157 10.2812H18.6347C19.4957 10.2812 19.9337 10.6642 19.9337 11.4022V18.8122C19.9337 19.5512 19.5507 19.9472 18.8127 19.9472Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}