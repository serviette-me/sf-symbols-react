import { IconProps } from "../../types"

export default function SuitClubIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.173828125 28.90234375"
          className={className}
        >
          <path
            d="              M-0.0003 16.4468C-0.0003 20.5758 3.2407 23.1328 6.3167 23.1328C7.5327 23.1328 8.5727 22.9828 9.4607 22.6128C8.9957 23.3378 8.4487 23.8848 7.8617 24.5818C6.4397 26.2368 7.0817 28.9028 9.6937 28.9028H20.4807C23.0917 28.9028 23.7347 26.2368 22.2987 24.5818C21.7107 23.8848 21.1777 23.3378 20.7127 22.6128C21.6017 22.9828 22.6267 23.1328 23.8437 23.1328C26.9337 23.1328 30.1737 20.5758 30.1737 16.4468C30.1737 12.6598 27.1657 9.7618 23.3657 9.7618C22.4627 9.7618 21.5057 9.9118 20.7537 10.2948C21.6017 9.3238 21.9707 8.1488 21.9707 6.8908C21.9707 3.0758 18.8807 -0.0002 15.0797 -0.0002C11.2927 -0.0002 8.2027 3.0758 8.2027 6.8908C8.2027 8.1618 8.5727 9.3238 9.4067 10.2948C8.6677 9.9118 7.7107 9.7618 6.8087 9.7618C3.0077 9.7618 -0.0003 12.6598 -0.0003 16.4468ZM5.3047 16.1468C5.3047 14.6968 6.3707 13.7128 7.8067 13.7128C8.9417 13.7128 9.6527 14.1368 10.3767 14.4918C10.8967 14.7658 11.4437 14.9978 12.2087 14.9978C13.5757 14.9978 14.2737 14.2458 14.2737 13.1528C14.2737 12.6188 14.1097 12.0178 13.7407 11.4028C13.0297 10.2538 12.3317 8.8868 12.3317 6.8908C12.3317 5.3598 13.5627 4.1148 15.0797 4.1148C16.5977 4.1148 17.8417 5.3598 17.8417 6.8908C17.8417 8.8868 17.1447 10.2538 16.4337 11.4028C16.0507 12.0178 15.9007 12.6188 15.9007 13.1528C15.9007 14.2458 16.5977 14.9978 17.9507 14.9978C18.7167 14.9978 19.2637 14.7658 19.7827 14.4918C20.4937 14.1228 21.2187 13.7128 22.3537 13.7128C23.7887 13.7128 24.8687 14.6968 24.8687 16.1468C24.8687 17.4998 23.8167 18.4028 22.3537 18.4028C21.1777 18.4028 20.4807 18.1288 19.4687 17.6778C18.2657 17.1308 16.3787 17.7458 16.3787 19.9748C16.3787 21.1228 16.9117 22.3668 17.5137 23.4468C17.6367 23.6658 17.5137 23.7888 17.3767 23.7888H12.7967C12.6597 23.7888 12.5367 23.6658 12.6597 23.4468C13.2617 22.3668 13.7817 21.1228 13.7817 19.9748C13.7817 17.7458 11.8947 17.1308 10.7047 17.6778C9.6937 18.1288 8.9827 18.4028 7.8067 18.4028C6.3577 18.4028 5.3047 17.4998 5.3047 16.1468ZM10.6367 11.6078C10.5957 11.4708 10.5277 11.3618 10.4587 11.2378C10.6917 11.4028 10.9377 11.5528 11.1977 11.7028ZM19.5237 11.6078L18.9627 11.7028C19.2227 11.5528 19.4687 11.4028 19.7007 11.2378C19.6327 11.3618 19.5777 11.4848 19.5237 11.6078Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.123046875 27.302734375"
          className={className}
        >
          <path
            d="              M-0.0003 15.8999C-0.0003 19.7419 2.8027 22.1899 6.1117 22.1899C7.4917 22.1899 8.7367 21.9019 9.7067 21.3149C9.1597 22.4079 8.4357 23.1879 7.8207 23.9119C6.6717 25.2659 7.2047 27.3029 9.2417 27.3029H18.8667C20.9177 27.3029 21.4377 25.2659 20.3027 23.9119C19.6877 23.1879 18.9487 22.4079 18.4027 21.3149C19.3867 21.9019 20.6307 22.1899 22.0117 22.1899C25.3207 22.1899 28.1227 19.7419 28.1227 15.8999C28.1227 12.3729 25.2927 9.5979 21.7657 9.5979C20.8087 9.5979 19.8107 9.8029 18.9767 10.2399C20.0157 9.1189 20.4527 7.7519 20.4527 6.3989C20.4527 2.8579 17.5817 -0.0001 14.0547 -0.0001C10.5407 -0.0001 7.6697 2.8579 7.6697 6.3989C7.6697 7.7519 8.1077 9.1059 9.1467 10.2399C8.3257 9.8029 7.3147 9.5979 6.3437 9.5979C2.8297 9.5979 -0.0003 12.3729 -0.0003 15.8999ZM3.6227 15.7769C3.6227 13.9449 5.0447 12.5779 6.8497 12.5779C8.2577 12.5779 9.2007 13.0569 10.0217 13.4119C10.4867 13.6169 10.9377 13.7949 11.4977 13.7949C12.4137 13.7949 13.0157 13.2619 13.0157 12.3869C13.0157 11.9489 12.8657 11.4709 12.5507 11.0199C11.5797 9.7339 10.7047 8.4899 10.7047 6.4259C10.7047 4.5529 12.2087 3.0489 14.0547 3.0489C15.9137 3.0489 17.4177 4.5529 17.4177 6.4259C17.4177 8.4899 16.5297 9.7339 15.5727 11.0199C15.2577 11.4709 15.1077 11.9489 15.1077 12.3869C15.1077 13.2619 15.6957 13.7949 16.6247 13.7949C17.1857 13.7949 17.6227 13.6169 18.0877 13.4119C18.9077 13.0569 19.8517 12.5779 21.2737 12.5779C23.0647 12.5779 24.4997 13.9449 24.4997 15.7769C24.4997 17.6369 23.1737 18.8539 21.2597 18.8539C19.8517 18.8539 18.7027 18.4019 17.7457 17.7599C16.7347 17.1169 15.2027 17.6089 15.2307 19.3459C15.2987 20.6169 16.0367 22.2989 16.8297 23.4059C16.9807 23.6389 16.8707 23.8029 16.6937 23.8029H11.4297C11.2517 23.8029 11.1287 23.6389 11.2927 23.4059C12.0857 22.2989 12.8107 20.6169 12.8927 19.3459C12.9197 17.6089 11.3887 17.1169 10.3767 17.7599C9.4197 18.4019 8.2717 18.8539 6.8497 18.8539C4.9357 18.8539 3.6227 17.6369 3.6227 15.7769ZM10.3767 11.2929V11.2789C10.4457 11.3339 10.5137 11.3749 10.5817 11.4159ZM17.7047 11.3199L17.4997 11.4299C17.5817 11.3889 17.6637 11.3339 17.7327 11.2929Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.203125 28.150390625"
          className={className}
        >
          <path
            d="              M-0.0003 16.2014C-0.0003 20.1794 3.0347 22.6954 6.2207 22.6954C7.5197 22.6954 8.6407 22.4904 9.5837 22.0114C9.0777 22.9004 8.4487 23.5564 7.8477 24.2674C6.5487 25.7854 7.1367 28.1504 9.4747 28.1504H19.7147C22.0667 28.1504 22.6547 25.7854 21.3557 24.2674C20.7537 23.5564 20.1247 22.9004 19.6187 22.0114C20.5627 22.4904 21.6837 22.6954 22.9827 22.6954C26.1677 22.6954 29.2027 20.1794 29.2027 16.2014C29.2027 12.5234 26.2777 9.6934 22.6137 9.6934C21.6697 9.6934 20.6987 9.8574 19.9067 10.2814C20.8497 9.2284 21.2457 7.9704 21.2457 6.6584C21.2457 2.9804 18.2657 0.0004 14.6017 0.0004C10.9377 0.0004 7.9567 2.9804 7.9567 6.6584C7.9567 7.9704 8.3537 9.2284 9.2967 10.2814C8.5037 9.8574 7.5327 9.6934 6.5897 9.6934C2.9257 9.6934 -0.0003 12.5234 -0.0003 16.2014ZM4.5117 15.9824C4.5117 14.3554 5.7417 13.1794 7.3557 13.1794C8.6137 13.1794 9.4337 13.6304 10.2127 13.9864C10.7047 14.2324 11.2107 14.4234 11.8807 14.4234C13.0297 14.4234 13.6717 13.7814 13.6717 12.7974C13.6717 12.3044 13.5217 11.7714 13.1797 11.2244C12.3457 10.0074 11.5527 8.6954 11.5527 6.6724C11.5527 4.9904 12.9197 3.6234 14.6017 3.6234C16.2697 3.6234 17.6367 4.9904 17.6367 6.6724C17.6367 8.6954 16.8577 10.0074 16.0237 11.2244C15.6817 11.7714 15.5177 12.3044 15.5177 12.7974C15.5177 13.7814 16.1737 14.4234 17.3227 14.4234C17.9917 14.4234 18.4847 14.2324 18.9767 13.9864C19.7417 13.6304 20.5757 13.1794 21.8477 13.1794C23.4477 13.1794 24.6917 14.3554 24.6917 15.9824C24.6917 17.5684 23.5157 18.6214 21.8477 18.6214C20.5487 18.6214 19.6467 18.2654 18.6487 17.7184C17.5407 17.1304 15.8317 17.6914 15.8457 19.6734C15.8727 20.8904 16.5017 22.3394 17.1857 23.4334C17.3227 23.6664 17.2127 23.8024 17.0487 23.8024H12.1547C11.9907 23.8024 11.8667 23.6664 12.0177 23.4334C12.7007 22.3394 13.3297 20.8904 13.3577 19.6734C13.3707 17.6914 11.6617 17.1304 10.5547 17.7184C9.5567 18.2654 8.6547 18.6214 7.3557 18.6214C5.6877 18.6214 4.5117 17.5684 4.5117 15.9824ZM10.5137 11.4574C10.4727 11.3884 10.4317 11.3064 10.3767 11.2384C10.5547 11.3614 10.7327 11.4704 10.9237 11.5804ZM18.6617 11.4704L18.2797 11.5804C18.4567 11.4704 18.6347 11.3614 18.8127 11.2384C18.7577 11.3204 18.7167 11.3884 18.6617 11.4704Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.51171875 25.224609375"
          className={className}
        >
          <path
            d="              M-0.0003 15.0113C-0.0003 18.4843 2.3107 20.7813 5.7697 20.7813C7.4097 20.7813 8.9687 20.1523 9.8987 19.2223C9.3377 20.8083 8.2847 22.0803 7.4787 22.9413C6.6307 23.9123 7.0137 25.2243 8.3947 25.2243H17.1167C18.4977 25.2243 18.8807 23.9123 18.0327 22.9413C17.2267 22.0803 16.1877 20.8083 15.6137 19.2223C16.5567 20.1523 18.1017 20.7813 19.7417 20.7813C23.2007 20.7813 25.5117 18.4843 25.5117 15.0113C25.5117 11.8123 22.9137 9.2283 19.7417 9.2283C18.7577 9.2283 17.7327 9.4883 16.8027 9.9943C18.0877 8.6683 18.5387 7.0953 18.5387 5.7973C18.5387 2.5973 15.9417 0.0003 12.7557 0.0003C9.5707 0.0003 6.9867 2.5973 6.9867 5.7973C6.9867 7.1093 7.4237 8.6543 8.7087 9.9943C7.7927 9.4883 6.7537 9.2283 5.7697 9.2283C2.5977 9.2283 -0.0003 11.8123 -0.0003 15.0113ZM1.5177 15.0393C1.5177 12.6743 3.4317 10.7873 5.7697 10.7873C7.3687 10.7873 8.4217 11.3343 9.2967 11.7303C9.6387 11.8673 9.8987 11.9353 10.1857 11.9353C10.6227 11.9353 11.0057 11.6623 11.0057 11.1423C11.0057 10.8423 10.8827 10.5413 10.6917 10.3083C9.4747 8.9273 8.5037 7.8063 8.5037 5.8243C8.5037 3.4593 10.4047 1.5583 12.7557 1.5583C15.1077 1.5583 17.0077 3.4593 17.0077 5.8243C17.0077 7.8063 16.0367 8.9273 14.8207 10.3083C14.6287 10.5413 14.5057 10.8423 14.5057 11.1423C14.5057 11.6623 14.9027 11.9353 15.3257 11.9353C15.6137 11.9353 15.8727 11.8673 16.2147 11.7303C17.0757 11.3473 18.1427 10.7873 19.7417 10.7873C22.0797 10.7873 23.9937 12.6743 23.9937 15.0393C23.9937 17.5823 22.2987 19.2633 19.7417 19.2633C18.0877 19.2633 16.6117 18.5803 15.6957 17.6503C14.9847 16.9673 13.9177 17.3493 14.0547 18.4433C14.3827 20.0843 15.3397 21.9983 16.4477 23.2153C16.6937 23.4743 16.5837 23.7343 16.2967 23.7343H9.2147C8.9277 23.7343 8.8187 23.4743 9.0647 23.2153C10.1717 21.9983 11.1287 20.0843 11.4707 18.4433C11.5937 17.3493 10.5407 16.9673 9.8167 17.6503C8.9007 18.5803 7.4237 19.2633 5.7697 19.2633C3.2267 19.2633 1.5177 17.5823 1.5177 15.0393Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.27734375"
          className={className}
        >
          <path
            d="              M-0.0003 15.5588C-0.0003 19.2088 2.5297 21.6018 5.9747 21.6018C7.4507 21.6018 8.8597 21.1778 9.8577 20.4528C9.2827 21.8068 8.3947 22.7778 7.7927 23.4888C6.8357 24.6508 7.2737 26.2778 8.9687 26.2778H17.8417C19.5237 26.2778 19.9747 24.6508 19.0177 23.4888C18.4157 22.7778 17.5137 21.8068 16.9527 20.4528C17.9507 21.1778 19.3597 21.6018 20.8357 21.6018C24.2817 21.6018 26.8107 19.2088 26.8107 15.5588C26.8107 12.1958 24.0897 9.5018 20.7537 9.5018C19.7697 9.5018 18.7577 9.7348 17.8687 10.1988C19.0037 8.9688 19.4827 7.4788 19.4827 6.0978C19.4827 2.7348 16.7477 -0.0002 13.3987 -0.0002C10.0627 -0.0002 7.3277 2.7348 7.3277 6.0978C7.3277 7.4788 7.8067 8.9688 8.9417 10.1988C8.0667 9.7348 7.0547 9.5018 6.0567 9.5018C2.7207 9.5018 -0.0003 12.1958 -0.0003 15.5588ZM2.5427 15.5308C2.5427 13.4808 4.1977 11.8538 6.2347 11.8538C7.8207 11.8538 8.9007 12.3728 9.8027 12.7288C10.2267 12.9058 10.6097 13.0298 11.0327 13.0298C11.6757 13.0298 12.2087 12.6328 12.2087 11.9218C12.2087 11.5258 12.0587 11.1288 11.7987 10.7868C10.6637 9.4058 9.6657 8.2438 9.6657 6.1248C9.6657 4.0468 11.3337 2.3788 13.3987 2.3788C15.4767 2.3788 17.1447 4.0468 17.1447 6.1248C17.1447 8.2438 16.1467 9.4058 15.0117 10.7868C14.7517 11.1288 14.6017 11.5258 14.6017 11.9218C14.6017 12.6328 15.1207 13.0298 15.7777 13.0298C16.1877 13.0298 16.5707 12.9058 16.9937 12.7288C17.8967 12.3728 18.9767 11.8538 20.5627 11.8538C22.6137 11.8538 24.2677 13.4808 24.2677 15.5308C24.2677 17.7188 22.7777 19.1548 20.5627 19.1548C18.9907 19.1548 17.5687 18.5798 16.6527 17.8148C15.7637 17.1308 14.4507 17.5278 14.4917 18.9488C14.6157 20.3028 15.4767 22.2438 16.3787 23.3928C16.5707 23.6248 16.4477 23.8168 16.2557 23.8168H10.5547C10.3637 23.8168 10.2407 23.6248 10.4177 23.3928C11.3207 22.2438 12.1957 20.3028 12.3187 18.9488C12.3597 17.5278 11.0467 17.1168 10.1577 17.8148C9.2417 18.5798 7.8067 19.1548 6.2477 19.1548C4.0327 19.1548 2.5427 17.7188 2.5427 15.5308Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.072265625 25.689453125"
          className={className}
        >
          <path
            d="              M-0.0003 15.353C-0.0003 18.895 2.3657 21.26 5.9067 21.26C7.4237 21.26 8.9417 20.754 9.9257 19.947C9.3657 21.437 8.3537 22.545 7.7657 23.242C6.9177 24.295 7.3277 25.689 8.8047 25.689H17.2677C18.7437 25.689 19.1547 24.295 18.2927 23.242C17.7047 22.545 16.6937 21.437 16.1467 19.947C17.1307 20.754 18.6487 21.26 20.1657 21.26C23.7067 21.26 26.0727 18.895 26.0727 15.353C26.0727 12.086 23.4197 9.434 20.1797 9.434C19.1817 9.434 18.1697 9.693 17.2537 10.145C18.4437 8.873 18.9357 7.301 18.9357 5.92C18.9357 2.652 16.2827 0 13.0297 0C9.7887 0 7.1367 2.652 7.1367 5.92C7.1367 7.314 7.6287 8.859 8.8187 10.145C7.9027 9.693 6.8907 9.434 5.8927 9.434C2.6527 9.434 -0.0003 12.086 -0.0003 15.353ZM1.9417 15.395C1.9417 13.193 3.7187 11.43 5.8927 11.43C7.5737 11.43 8.7367 11.977 9.6657 12.346C10.0897 12.482 10.4317 12.592 10.7737 12.592C11.2657 12.592 11.7437 12.264 11.7437 11.635C11.7437 11.279 11.6077 10.924 11.3617 10.637C10.1447 9.215 9.0777 8.094 9.0777 5.961C9.0777 3.76 10.8417 1.996 13.0297 1.996C15.2307 1.996 16.9937 3.76 16.9937 5.961C16.9937 8.094 15.9277 9.215 14.7107 10.637C14.4647 10.924 14.3277 11.279 14.3277 11.635C14.3277 12.264 14.8067 12.592 15.2987 12.592C15.6407 12.592 15.9687 12.482 16.3927 12.346C17.3227 11.99 18.4847 11.43 20.1797 11.43C22.3537 11.43 24.1307 13.193 24.1307 15.395C24.1307 17.76 22.5447 19.318 20.1657 19.318C18.5117 19.318 16.9257 18.662 16.0237 17.842C15.2027 17.117 14.0277 17.459 14.0817 18.703C14.2187 20.111 15.1757 22.217 16.1327 23.379C16.3377 23.611 16.2147 23.803 16.0097 23.803H10.0627C9.8577 23.803 9.7347 23.611 9.9397 23.379C10.8967 22.217 11.8397 20.111 11.9907 18.703C12.0447 17.459 10.8687 17.117 10.0347 17.842C9.1327 18.662 7.5607 19.318 5.9067 19.318C3.5277 19.318 1.9417 17.76 1.9417 15.395Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.37109375 26.71484375"
          className={className}
        >
          <path
            d="              M-0.0003 15.6952C-0.0003 19.4282 2.6387 21.8472 6.0297 21.8472C7.4647 21.8472 8.8047 21.4922 9.7887 20.8222C9.2287 22.0662 8.4077 22.9412 7.8067 23.6522C6.7677 24.9102 7.2457 26.7152 9.0917 26.7152H18.2927C20.1247 26.7152 20.6037 24.9102 19.5777 23.6522C18.9627 22.9412 18.1427 22.0662 17.5817 20.8222C18.5667 21.4922 19.9067 21.8472 21.3417 21.8472C24.7327 21.8472 27.3707 19.4282 27.3707 15.6952C27.3707 12.2642 24.6097 9.5292 21.1917 9.5292C20.2067 9.5292 19.2087 9.7482 18.3477 10.2132C19.4417 9.0232 19.9067 7.5882 19.9067 6.2212C19.9067 2.7752 17.1037 0.0002 13.6857 0.0002C10.2677 0.0002 7.4787 2.7752 7.4787 6.2212C7.4787 7.5882 7.9297 9.0232 9.0367 10.2132C8.1757 9.7622 7.1637 9.5292 6.1797 9.5292C2.7617 9.5292 -0.0003 12.2642 -0.0003 15.6952ZM3.0077 15.6272C3.0077 13.6722 4.5667 12.1542 6.5077 12.1542C8.0117 12.1542 9.0237 12.6602 9.8987 13.0152C10.3497 13.2072 10.7597 13.3442 11.2387 13.3442C12.0037 13.3442 12.5507 12.8922 12.5507 12.1132C12.5507 11.7032 12.4007 11.2652 12.1267 10.8692C11.0607 9.5432 10.1037 8.3402 10.1037 6.2482C10.1037 4.2652 11.7167 2.6662 13.6857 2.6662C15.6677 2.6662 17.2677 4.2652 17.2677 6.2482C17.2677 8.3402 16.3107 9.5432 15.2577 10.8692C14.9707 11.2652 14.8207 11.7032 14.8207 12.1132C14.8207 12.8922 15.3807 13.3442 16.1467 13.3442C16.6247 13.3442 17.0217 13.2072 17.4727 13.0152C18.3337 12.6602 19.3597 12.1542 20.8637 12.1542C22.8047 12.1542 24.3637 13.6722 24.3637 15.6272C24.3637 17.6782 22.9547 19.0172 20.8637 19.0172C19.3597 19.0172 18.0607 18.4982 17.1167 17.7732C16.1737 17.1172 14.7797 17.5552 14.8067 19.1132C14.9157 20.4262 15.7227 22.2582 16.5707 23.3922C16.7477 23.6252 16.6247 23.8032 16.4477 23.8032H10.9237C10.7457 23.8032 10.6227 23.6252 10.8007 23.3922C11.6487 22.2582 12.4547 20.4262 12.5647 19.1132C12.6057 17.5552 11.1977 17.1172 10.2537 17.7732C9.3107 18.4982 8.0117 19.0172 6.5077 19.0172C4.4297 19.0172 3.0077 17.6782 3.0077 15.6272Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.7734375 24.58203125"
          className={className}
        >
          <path
            d="              M-0.0003 14.5472C-0.0003 17.9102 2.2417 20.1522 5.6057 20.1522C7.4377 20.1522 9.0367 19.2912 9.8847 18.1972C9.3107 19.8922 8.2307 21.4242 7.0957 22.5312C6.2477 23.3922 6.6167 24.5822 7.8477 24.5822H16.9257C18.1697 24.5822 18.5257 23.3922 17.6917 22.5312C16.5427 21.4102 15.4767 19.8922 14.8887 18.1972C15.7367 19.2912 17.3357 20.1522 19.1677 20.1522C22.5317 20.1522 24.7737 17.9102 24.7737 14.5472C24.7737 11.4432 22.2577 8.9412 19.1817 8.9412C18.1837 8.9412 17.0757 9.2152 16.1327 9.8442C17.6367 8.4082 17.9917 6.8222 17.9917 5.6192C17.9917 2.5022 15.4767 0.0002 12.3867 0.0002C9.2967 0.0002 6.7817 2.5022 6.7817 5.6192C6.7817 6.8222 7.1367 8.3942 8.6407 9.8302C7.6977 9.2152 6.6037 8.9412 5.5917 8.9412C2.5157 8.9412 -0.0003 11.4432 -0.0003 14.5472ZM0.9567 14.5602C0.9567 11.9762 3.0487 9.9122 5.5917 9.9122C7.1097 9.9122 8.0117 10.4862 8.7907 10.9102C9.0367 11.0472 9.1877 11.0742 9.4067 11.0742C9.7617 11.0742 10.0217 10.8422 10.0217 10.4592C10.0217 10.2402 9.9257 10.0352 9.7887 9.8852C8.5997 8.5582 7.7387 7.4242 7.7387 5.6332C7.7387 3.0492 9.8167 0.9842 12.3867 0.9842C14.9567 0.9842 17.0347 3.0492 17.0347 5.6332C17.0347 7.4242 16.1737 8.5582 14.9847 9.8852C14.8477 10.0352 14.7517 10.2402 14.7517 10.4592C14.7517 10.8422 15.0257 11.0742 15.3667 11.0742C15.5997 11.0742 15.7367 11.0472 15.9827 10.9102C16.7617 10.5002 17.6637 9.9122 19.1817 9.9122C21.7387 9.9122 23.8167 11.9762 23.8167 14.5602C23.8167 17.3362 21.9567 19.1812 19.1677 19.1812C17.5277 19.1812 16.2007 18.4572 15.2717 17.4042C14.6837 16.7622 13.7947 17.1722 14.0137 18.0742C14.5737 20.0432 15.5727 21.7112 16.8707 22.9822C17.1717 23.2692 17.0757 23.6252 16.6797 23.6252H8.0937C7.6977 23.6252 7.6017 23.2692 7.9027 22.9822C9.2007 21.7112 10.1987 20.0432 10.7597 18.0742C10.9787 17.1722 10.1037 16.7482 9.5157 17.4042C8.5727 18.4572 7.2597 19.1812 5.6057 19.1812C2.8167 19.1812 0.9567 17.3362 0.9567 14.5602Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.404296875 24.240234375"
          className={className}
        >
          <path
            d="              M-0.0003 14.3005C-0.0003 17.6095 2.2147 19.8105 5.5237 19.8105C7.4917 19.8105 9.1327 18.7855 9.9117 17.5685C9.3107 19.3455 8.2437 21.0415 6.8907 22.3125C6.0567 23.1195 6.3987 24.2405 7.5737 24.2405H16.8297C17.9917 24.2405 18.3477 23.1195 17.4997 22.3125C16.1597 21.0415 15.0797 19.3455 14.4787 17.5685C15.2717 18.7855 16.9117 19.8105 18.8807 19.8105C22.1897 19.8105 24.4047 17.6095 24.4047 14.3005C24.4047 11.2385 21.9297 8.7775 18.8947 8.7775C17.7187 8.7775 16.3377 9.1735 15.3257 10.1715L15.2307 10.2265C17.3497 8.5725 17.7187 6.7675 17.7187 5.5235C17.7187 2.4475 15.2437 0.0005 12.1957 0.0005C9.1467 0.0005 6.6717 2.4475 6.6717 5.5235C6.6717 6.7675 7.0547 8.5725 9.1597 10.2265L9.0777 10.1715C8.0667 9.1735 6.6857 8.7775 5.5097 8.7775C2.4747 8.7775 -0.0003 11.2385 -0.0003 14.3005ZM0.6697 14.3005C0.6697 11.6075 2.8437 9.4475 5.5097 9.4475C6.9727 9.4475 7.8067 10.0485 8.5317 10.4865C8.7367 10.6095 8.8187 10.6235 9.0097 10.6235C9.3237 10.6235 9.5157 10.4175 9.5157 10.1035C9.5157 9.9125 9.4337 9.7615 9.3377 9.6385C8.1487 8.3535 7.3557 7.2185 7.3557 5.5235C7.3557 2.8165 9.5157 0.6695 12.1957 0.6695C14.8747 0.6695 17.0487 2.8165 17.0487 5.5235C17.0487 7.2185 16.2557 8.3535 15.0667 9.6385C14.9707 9.7615 14.8747 9.9125 14.8747 10.1035C14.8747 10.4175 15.0797 10.6235 15.3947 10.6235C15.5857 10.6235 15.6677 10.6095 15.8727 10.4865C16.5977 10.0485 17.4317 9.4475 18.8947 9.4475C21.5607 9.4475 23.7207 11.6075 23.7207 14.3005C23.7207 17.2125 21.7797 19.1405 18.8807 19.1405C17.2407 19.1405 15.9827 18.3885 15.0387 17.2675C14.5197 16.6525 13.7267 17.0765 13.9997 17.8825C14.6837 20.0155 15.6957 21.5465 17.0897 22.8455C17.4177 23.1605 17.3357 23.5705 16.8707 23.5705H7.5327C7.0687 23.5705 6.9867 23.1605 7.3147 22.8455C8.7087 21.5465 9.7207 20.0155 10.4047 17.8825C10.6777 17.0765 9.8707 16.6385 9.3657 17.2675C8.4217 18.3885 7.1637 19.1405 5.5237 19.1405C2.6247 19.1405 0.6697 17.2125 0.6697 14.3005Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}