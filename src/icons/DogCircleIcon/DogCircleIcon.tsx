import { IconProps } from "../../types"

export default function DogCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM19.1407 10.8831C20.0567 10.8831 20.4937 9.4471 20.4937 9.0231C20.4937 8.5861 20.2347 8.3531 19.7967 8.3531H18.4847C18.0197 8.3531 17.8007 8.5861 17.8007 9.0231C17.8007 9.4471 18.2247 10.8831 19.1407 10.8831ZM8.9827 21.4371H10.1447C10.8827 21.4371 11.2927 20.9591 11.2927 20.4391C11.2927 19.8511 10.9917 19.6461 10.3907 19.5921C10.1577 19.5511 10.1717 19.2641 10.3637 19.2361C11.6487 18.9491 12.5237 18.5251 12.7557 17.4181C13.5897 17.9101 14.7657 17.9651 16.1187 17.8551C16.1187 18.6351 16.0097 19.5641 16.0097 20.0981C16.0097 20.9041 16.5017 21.4371 17.2817 21.4371H18.1837C18.9217 21.4371 19.3597 20.9591 19.3597 20.4391C19.3597 19.8511 19.0447 19.6051 18.5797 19.5641C18.3887 19.5231 18.3477 19.4411 18.3747 19.2641C18.4567 18.8811 18.7307 17.7601 18.9077 17.2261C19.2907 16.0371 19.8787 15.2301 19.8787 13.9591C19.8787 13.5491 19.9337 13.2751 20.0297 13.1391C20.4257 13.3851 20.7267 13.5211 21.1777 13.5211C22.2167 13.5211 23.2967 12.4821 23.2967 11.3611C23.2967 10.7051 22.7497 10.7051 22.2437 10.3631C21.7927 10.0351 21.4917 9.6111 20.9997 9.3511C20.8637 10.1581 20.2347 11.4161 19.1407 11.4161C18.4847 11.4161 17.9917 10.9511 17.6917 10.3911C17.2677 10.9511 17.0487 11.3611 15.9827 11.7301L11.3337 12.0861C11.2247 12.0861 11.1697 12.0991 11.1017 12.1131L10.7597 11.7031C9.9667 10.7191 8.6817 11.8941 9.4747 12.8241L9.8577 13.2751C9.6387 13.7951 9.5157 14.4781 9.5157 15.2991C9.5157 16.6111 9.4477 16.8981 9.1597 17.1441C8.2027 17.9101 7.8067 18.4021 7.8067 19.2501V20.2621C7.8067 20.9451 8.3127 21.4371 8.9827 21.4371ZM21.2867 11.4431C21.0817 11.4431 20.9587 11.3071 20.9587 11.1011C20.9587 10.8961 21.0817 10.7461 21.2867 10.7461C21.4917 10.7461 21.6287 10.8961 21.6287 11.1011C21.6287 11.3071 21.4917 11.4431 21.2867 11.4431Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM18.9627 9.9396C19.8787 9.9396 20.3577 8.4216 20.3577 7.9976C20.3577 7.5746 20.1247 7.3556 19.7007 7.3556H18.2387C17.8007 7.3556 17.5817 7.5746 17.5817 7.9976C17.5817 8.4216 18.0327 9.9396 18.9627 9.9396ZM7.8617 21.3416H9.1057C9.8437 21.3416 10.2677 20.8766 10.2677 20.3296C10.2677 19.7426 9.9527 19.5096 9.3517 19.4546C9.0777 19.4136 9.0917 19.0996 9.3107 19.0586C10.7597 18.7986 11.6757 18.1566 11.8947 16.8986C12.7967 17.4866 14.2327 17.5546 15.7227 17.4046C15.7087 18.2656 15.5997 19.4136 15.5997 20.0156C15.5997 20.8226 16.0917 21.3416 16.8707 21.3416H17.8827C18.6207 21.3416 19.0447 20.8766 19.0447 20.3296C19.0447 19.7696 18.7577 19.5096 18.1697 19.4416C18.0057 19.4006 17.9377 19.3186 17.9647 19.1546C18.0737 18.6206 18.4027 17.3496 18.5937 16.7616C19.0177 15.4906 19.6327 14.6566 19.6327 13.3296C19.6327 12.7836 19.7417 12.4546 19.8787 12.3186C20.3297 12.5916 20.6717 12.7426 21.1507 12.7426C22.2307 12.7426 23.3237 11.6486 23.3237 10.4866C23.3237 9.8436 22.7777 9.8296 22.2027 9.4476C21.6837 9.1056 21.3687 8.6406 20.8767 8.3676C20.7267 9.2016 20.0837 10.4996 18.9627 10.4996C18.2797 10.4996 17.7867 10.0216 17.4727 9.4476C16.9937 10.0896 16.7887 10.5956 15.5447 11.0056L10.4047 11.4026C10.2817 11.4156 10.1857 11.4436 10.1167 11.4846L9.6937 10.9646C8.9007 10.0076 7.6287 11.1566 8.4217 12.0586L8.8867 12.6196C8.6547 13.1936 8.5177 13.9046 8.5177 14.7926C8.5177 16.1876 8.4217 16.5426 8.0527 16.8436C7.0817 17.6226 6.6717 18.1426 6.6717 19.0176V20.1526C6.6717 20.8496 7.1777 21.3416 7.8617 21.3416ZM21.1917 10.5686C20.9587 10.5686 20.8087 10.4176 20.8087 10.1856C20.8087 9.9666 20.9587 9.8026 21.1917 9.8026C21.3967 9.8026 21.5607 9.9666 21.5607 10.1856C21.5607 10.4176 21.3967 10.5686 21.1917 10.5686Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM19.0587 10.4454C19.9747 10.4454 20.4257 8.9684 20.4257 8.5454C20.4257 8.1214 20.1797 7.8884 19.7557 7.8884H18.3747C17.9097 7.8884 17.6917 8.1214 17.6917 8.5454C17.6917 8.9684 18.1287 10.4454 19.0587 10.4454ZM8.4487 21.3964H9.6527C10.3907 21.3964 10.8147 20.9314 10.8147 20.3844C10.8147 19.8104 10.4997 19.5914 9.8987 19.5374C9.6527 19.4964 9.6657 19.1814 9.8707 19.1684C11.2387 18.8944 12.1267 18.3614 12.3457 17.1724C13.2207 17.7184 14.5197 17.7734 15.9277 17.6504C15.9277 18.4704 15.8047 19.4964 15.8047 20.0704C15.8047 20.8774 16.3107 21.3964 17.0897 21.3964H18.0467C18.7847 21.3964 19.2087 20.9314 19.2087 20.3984C19.2087 19.8244 18.9077 19.5644 18.3887 19.5094C18.2107 19.4684 18.1567 19.3864 18.1837 19.2224C18.2797 18.7574 18.5667 17.5684 18.7577 17.0074C19.1677 15.7914 19.7557 14.9704 19.7557 13.6724C19.7557 13.1934 19.8517 12.8924 19.9607 12.7554C20.3847 13.0154 20.6987 13.1664 21.1637 13.1664C22.2307 13.1664 23.3107 12.0994 23.3107 10.9514C23.3107 10.3084 22.7637 10.2954 22.2167 9.9394C21.7387 9.5974 21.4377 9.1604 20.9457 8.8864C20.7947 9.7074 20.1657 10.9924 19.0587 10.9924C18.3887 10.9924 17.8967 10.5134 17.5817 9.9534C17.1307 10.5544 16.9257 11.0054 15.7777 11.4024L10.8967 11.7714C10.7737 11.7714 10.7047 11.7984 10.6367 11.8264L10.2537 11.3614C9.4607 10.3904 8.1757 11.5524 8.9827 12.4684L9.4067 12.9744C9.1737 13.5214 9.0507 14.2184 9.0507 15.0664C9.0507 16.4204 8.9687 16.7344 8.6407 17.0074C7.6697 17.7734 7.2737 18.2794 7.2737 19.1544V20.2074C7.2737 20.9044 7.7797 21.3964 8.4487 21.3964ZM21.2457 11.0334C21.0277 11.0334 20.8907 10.8824 20.8907 10.6774C20.8907 10.4594 21.0277 10.3084 21.2457 10.3084C21.4507 10.3084 21.6017 10.4594 21.6017 10.6774C21.6017 10.8824 21.4507 11.0334 21.2457 11.0334Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM18.7847 8.736C19.7007 8.736 20.2067 7.137 20.2067 6.727C20.2067 6.344 20.0017 6.125 19.6327 6.125H17.9377C17.5817 6.125 17.3767 6.344 17.3767 6.727C17.3767 7.137 17.8557 8.736 18.7847 8.736ZM6.4937 21.15H7.7657C8.4907 21.15 8.9417 20.672 8.9417 20.07C8.9417 19.51 8.6137 19.209 8.0387 19.182C7.7517 19.154 7.7517 18.785 8.0117 18.758C9.6657 18.607 10.5957 17.623 10.7737 16.105C11.7847 16.844 13.6717 16.967 15.2437 16.707C15.2027 17.65 15.0797 19.182 15.0797 19.879C15.0797 20.645 15.5447 21.15 16.2827 21.15H17.4317C18.1427 21.15 18.5797 20.672 18.5797 20.111C18.5797 19.605 18.3617 19.332 17.5687 19.182C17.4317 19.141 17.3497 19.031 17.3907 18.881C17.5137 18.211 17.9787 16.625 18.1977 15.996C18.6347 14.738 19.2777 13.754 19.2777 12.414C19.2777 11.662 19.4957 11.32 19.6597 11.115C20.2067 11.443 20.6167 11.566 21.0957 11.566C22.1757 11.566 23.2287 10.404 23.2287 9.27C23.2287 8.654 22.6547 8.586 21.9707 8.148C21.3687 7.779 21.0957 7.355 20.6857 7.096C20.5217 7.902 19.8927 9.27 18.7847 9.27C18.0737 9.27 17.5817 8.709 17.2817 8.107C16.7207 8.873 16.5427 9.57 15.1347 10.104L9.2287 10.596C9.0367 10.609 8.9007 10.65 8.8187 10.705L8.2847 10.049C7.5327 9.146 6.3027 10.172 7.0687 11.061L7.6567 11.771C7.3967 12.455 7.2457 13.193 7.2457 14.096C7.2457 15.586 7.1367 16.01 6.6167 16.434C5.7007 17.145 5.3457 17.691 5.3457 18.607V19.947C5.3457 20.658 5.8107 21.15 6.4937 21.15ZM21.0407 9.365C20.7947 9.365 20.6167 9.188 20.6167 8.941C20.6167 8.709 20.7947 8.531 21.0407 8.531C21.2597 8.531 21.4377 8.709 21.4377 8.941C21.4377 9.188 21.2597 9.365 21.0407 9.365Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM18.8537 9.3241C19.7697 9.3241 20.2617 7.7651 20.2617 7.3281C20.2617 6.9311 20.0427 6.7131 19.6327 6.7131H18.0737C17.6637 6.7131 17.4457 6.9311 17.4457 7.3281C17.4457 7.7651 17.9097 9.3241 18.8537 9.3241ZM7.1367 21.2731H8.4357C9.1737 21.2731 9.6117 20.8081 9.6117 20.2481C9.6117 19.6601 9.2967 19.4141 8.6817 19.3591C8.3947 19.3181 8.4077 18.9761 8.6407 18.9491C10.1987 18.6891 11.1427 17.9101 11.3477 16.5431C12.2907 17.2131 13.8767 17.2951 15.4767 17.1031C15.4627 18.0331 15.3257 19.3051 15.3257 19.9471C15.3257 20.7541 15.8317 21.2731 16.6117 21.2731H17.6777C18.4157 21.2731 18.8537 20.8081 18.8537 20.2621C18.8537 19.7011 18.5797 19.4411 17.8967 19.3461C17.7597 19.3181 17.6777 19.2231 17.7047 19.0721C17.8277 18.4431 18.1837 17.0761 18.4027 16.4471C18.8397 15.1481 19.4827 14.2731 19.4827 12.9061C19.4827 12.2911 19.6327 11.9351 19.7697 11.7851C20.2757 12.0861 20.6447 12.2231 21.1367 12.2231C22.2307 12.2231 23.3377 11.1011 23.3377 9.9261C23.3377 9.2971 22.7907 9.2691 22.1757 8.8591C21.6157 8.4901 21.2867 8.0121 20.7947 7.7381C20.6307 8.5721 19.9747 9.9121 18.8537 9.9121C18.1567 9.9121 17.6507 9.4201 17.3227 8.8321C16.8297 9.5291 16.6117 10.0901 15.2717 10.5411L9.8167 10.9651C9.6657 10.9921 9.5567 11.0191 9.4747 11.0741L9.0097 10.4861C8.2027 9.5291 6.9587 10.6641 7.7517 11.5661L8.2717 12.1951C8.0117 12.8101 7.8747 13.5491 7.8747 14.4781C7.8747 15.9001 7.7657 16.2971 7.3557 16.6391C6.3577 17.4181 5.9607 17.9651 5.9607 18.8671V20.0701C5.9607 20.7811 6.4527 21.2731 7.1367 21.2731ZM21.1227 10.0081C20.8767 10.0081 20.7267 9.8301 20.7267 9.5981C20.7267 9.3651 20.8767 9.2011 21.1227 9.2011C21.3417 9.2011 21.5197 9.3651 21.5197 9.5981C21.5197 9.8301 21.3417 10.0081 21.1227 10.0081Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM18.7847 8.9824C19.7147 8.9824 20.2067 7.3964 20.2067 6.9594C20.2067 6.5624 20.0017 6.3434 19.5917 6.3434H17.9787C17.5817 6.3434 17.3637 6.5624 17.3637 6.9594C17.3637 7.3964 17.8417 8.9824 18.7847 8.9824ZM6.7267 21.2464H8.0527C8.8047 21.2464 9.2417 20.7674 9.2417 20.2074C9.2417 19.6194 8.9277 19.3594 8.3127 19.3044C8.0117 19.2634 8.0117 18.9214 8.2577 18.8804C9.8847 18.6344 10.8417 17.7734 11.0327 16.3514C12.0177 17.0484 13.6857 17.1444 15.3397 16.9254C15.3127 17.8964 15.1897 19.2364 15.1897 19.9204C15.1897 20.7264 15.6817 21.2464 16.4607 21.2464H17.5687C18.3067 21.2464 18.7307 20.7674 18.7307 20.2204C18.7307 19.6604 18.4707 19.4144 17.7597 19.3044C17.6227 19.2634 17.5277 19.1684 17.5687 19.0174C17.6917 18.3474 18.0737 16.9254 18.2927 16.2834C18.7437 14.9434 19.3867 14.0684 19.3867 12.6734C19.3867 12.0174 19.5647 11.6344 19.7147 11.4844C20.2477 11.7854 20.6167 11.9354 21.1227 11.9354C22.2307 11.9354 23.3517 10.8004 23.3517 9.5974C23.3517 8.9824 22.8047 8.9414 22.1487 8.5174C21.5737 8.1484 21.2457 7.6564 20.7537 7.3824C20.5757 8.2304 19.9197 9.5704 18.7847 9.5704C18.0737 9.5704 17.5817 9.0784 17.2537 8.4764C16.7347 9.2014 16.5157 9.8024 15.1207 10.2814L9.4747 10.7184C9.3237 10.7464 9.2007 10.7874 9.1187 10.8284L8.6267 10.2124C7.8207 9.2694 6.5897 10.3904 7.3687 11.2934L7.9157 11.9494C7.6567 12.5784 7.5057 13.3304 7.5057 14.2874C7.5057 15.7364 7.3967 16.1604 6.9587 16.5154C5.9477 17.3084 5.5507 17.8554 5.5507 18.7714V20.0294C5.5507 20.7404 6.0427 21.2464 6.7267 21.2464ZM21.0957 9.6794C20.8357 9.6794 20.6717 9.5024 20.6717 9.2694C20.6717 9.0234 20.8357 8.8454 21.0957 8.8454C21.3147 8.8454 21.4917 9.0234 21.4917 9.2694C21.4917 9.5024 21.3147 9.6794 21.0957 9.6794Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM18.8947 9.5979C19.8237 9.5979 20.3027 8.0529 20.3027 7.6149C20.3027 7.2049 20.0837 6.9859 19.6597 6.9859H18.1427C17.7187 6.9859 17.4997 7.2049 17.4997 7.6149C17.4997 8.0529 17.9647 9.5979 18.8947 9.5979ZM7.4377 21.3149H8.7227C9.4607 21.3149 9.8987 20.8359 9.8987 20.2759C9.8987 19.7009 9.5837 19.4549 8.9687 19.4009C8.6957 19.3599 8.7087 19.0309 8.9277 18.9899C10.4457 18.7439 11.3747 18.0199 11.5797 16.6929C12.5097 17.3219 14.0277 17.4179 15.5857 17.2269C15.5727 18.1289 15.4487 19.3459 15.4487 19.9749C15.4487 20.7809 15.9417 21.3149 16.7207 21.3149H17.7597C18.5117 21.3149 18.9357 20.8359 18.9357 20.2889C18.9357 19.7289 18.6617 19.4689 18.0197 19.3869C17.8687 19.3599 17.7867 19.2639 17.8147 19.1129C17.9377 18.5259 18.2797 17.1989 18.4847 16.5839C18.9217 15.2989 19.5367 14.4379 19.5367 13.0979C19.5367 12.5099 19.6877 12.1679 19.8237 12.0039C20.3027 12.3049 20.6577 12.4549 21.1367 12.4549C22.2307 12.4549 23.3377 11.3339 23.3377 10.1719C23.3377 9.5289 22.7907 9.5159 22.1757 9.1059C21.6427 8.7499 21.3277 8.2849 20.8357 8.0119C20.6717 8.8459 20.0297 10.1719 18.8947 10.1719C18.2107 10.1719 17.7047 9.6799 17.3907 9.0919C16.8987 9.7619 16.6797 10.3089 15.3947 10.7459L10.0627 11.1559C9.9257 11.1699 9.8297 11.2109 9.7477 11.2519L9.2967 10.6919C8.5037 9.7349 7.2457 10.8829 8.0387 11.7849L8.5317 12.3729C8.2847 12.9749 8.1487 13.6989 8.1487 14.6149C8.1487 16.0239 8.0527 16.4059 7.6567 16.7209C6.6577 17.5139 6.2757 18.0329 6.2757 18.9359V20.0979C6.2757 20.8089 6.7677 21.3149 7.4377 21.3149ZM21.1507 10.2539C20.9177 10.2539 20.7677 10.0899 20.7677 9.8579C20.7677 9.6249 20.9177 9.4609 21.1507 9.4609C21.3687 9.4609 21.5327 9.6249 21.5327 9.8579C21.5327 10.0899 21.3687 10.2539 21.1507 10.2539Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM18.7987 8.4222C19.6877 8.4222 20.1937 6.7952 20.1937 6.4122C20.1937 6.0702 20.0157 5.8512 19.6737 5.8512H17.8967C17.5817 5.8512 17.4047 6.0702 17.4047 6.4122C17.4047 6.7952 17.8827 8.4222 18.7987 8.4222ZM6.1797 21.0272H7.3827C8.0797 21.0272 8.5447 20.5352 8.5447 19.8922C8.5447 19.3732 8.2027 19.0312 7.6837 19.0172C7.4237 19.0042 7.3967 18.6352 7.6837 18.6212C9.3787 18.5662 10.2537 17.4312 10.4317 15.7772C11.4847 16.5702 13.6577 16.7482 15.1207 16.4062C15.0387 17.3222 14.9297 19.1132 14.9297 19.8382C14.9297 20.5492 15.3537 21.0272 16.0507 21.0272H17.2407C17.9237 21.0272 18.3747 20.5352 18.3747 19.9612C18.3747 19.5512 18.2247 19.2362 17.3227 19.0172C17.1987 18.9762 17.1167 18.8672 17.1447 18.6892C17.2817 18.0472 17.8417 16.2422 18.0737 15.6402C18.4977 14.4782 19.1407 13.3442 19.1407 12.0722C19.1407 11.2112 19.4137 10.8962 19.5647 10.6372C20.1527 10.9922 20.6037 11.0742 21.0547 11.0742C22.0937 11.0742 23.0647 9.8982 23.0647 8.8322C23.0647 8.2172 22.4487 8.1072 21.7387 7.6562C21.1097 7.3012 20.8767 6.9592 20.5897 6.7402C20.4397 7.4652 19.8657 8.8732 18.7987 8.8732C18.0737 8.8732 17.5817 8.2442 17.3087 7.6012C16.7067 8.4492 16.5837 9.2832 15.1617 9.8712L8.8867 10.4182C8.6547 10.4312 8.5037 10.4862 8.4217 10.5412L7.8337 9.8162C7.1507 8.9822 5.9477 9.8982 6.6717 10.7602L7.3147 11.5392C7.0407 12.2912 6.9177 13.0022 6.9177 13.8492C6.9177 15.3942 6.7947 15.8182 6.1797 16.3242C5.3867 16.9262 5.0727 17.4862 5.0727 18.4022V19.8512C5.0727 20.5622 5.4957 21.0272 6.1797 21.0272ZM20.9727 8.9412C20.7407 8.9412 20.5487 8.7772 20.5487 8.5312C20.5487 8.2992 20.7407 8.1212 20.9727 8.1212C21.1917 8.1212 21.3687 8.2992 21.3687 8.5312C21.3687 8.7772 21.1917 8.9412 20.9727 8.9412Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM18.7987 8.2581C19.6877 8.2581 20.1937 6.6171 20.1937 6.2481C20.1937 5.9201 20.0157 5.6871 19.7007 5.6871H17.8687C17.5957 5.6871 17.4177 5.9201 17.4177 6.2481C17.4177 6.6171 17.8827 8.2581 18.7987 8.2581ZM6.0297 20.9451H7.1917C7.8747 20.9451 8.3397 20.4671 8.3397 19.7971C8.3397 19.2911 7.9977 18.9221 7.5057 18.9221C7.2457 18.9221 7.2047 18.5391 7.5057 18.5391C9.2417 18.5391 10.0897 17.3221 10.2677 15.5991C11.3337 16.4201 13.6447 16.6111 15.0527 16.2421C14.9707 17.1581 14.8617 19.0721 14.8617 19.7971C14.8617 20.4941 15.2577 20.9451 15.9277 20.9451H17.1447C17.8147 20.9451 18.2657 20.4671 18.2657 19.8791C18.2657 19.5101 18.1427 19.1681 17.1987 18.9221C17.0757 18.8941 16.9937 18.7711 17.0217 18.5941C17.1577 17.9511 17.7737 16.0371 18.0057 15.4491C18.4297 14.3281 19.0727 13.1251 19.0727 11.8811C19.0727 10.9651 19.3727 10.6781 19.5237 10.3771C20.1247 10.7461 20.5897 10.8141 21.0277 10.8141C22.0527 10.8141 22.9827 9.6251 22.9827 8.5991C22.9827 7.9841 22.3537 7.8481 21.6157 7.3961C20.9587 7.0411 20.7817 6.7541 20.5347 6.5491C20.3987 7.2321 19.8377 8.6541 18.7987 8.6541C18.0737 8.6541 17.5957 7.9841 17.3357 7.3421C16.7067 8.2171 16.5977 9.1331 15.1617 9.7481L8.7087 10.3221C8.4627 10.3361 8.3127 10.3901 8.2167 10.4451L7.6017 9.6931C6.9457 8.8871 5.7557 9.7341 6.4807 10.5961L7.1367 11.4161C6.8637 12.2091 6.7407 12.9061 6.7407 13.7131C6.7407 15.2991 6.6167 15.7091 5.9477 16.2561C5.2227 16.8161 4.9217 17.3631 4.9217 18.2791V19.7971C4.9217 20.4941 5.3457 20.9451 6.0297 20.9451ZM20.9457 8.7231C20.7127 8.7231 20.5217 8.5451 20.5217 8.2991C20.5217 8.0801 20.7127 7.9021 20.9457 7.9021C21.1507 7.9021 21.3417 8.0801 21.3417 8.2991C21.3417 8.5451 21.1507 8.7231 20.9457 8.7231Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
