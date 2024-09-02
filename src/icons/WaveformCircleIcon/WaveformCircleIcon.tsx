import { IconProps } from "../../types"

export default function WaveformCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM13.6167 21.4241C14.1637 21.4241 14.5877 20.9861 14.5877 20.4391V9.4201C14.5877 8.8591 14.1637 8.4351 13.6167 8.4351C13.0837 8.4351 12.6597 8.8731 12.6597 9.4201V20.4391C12.6597 20.9861 13.0707 21.4241 13.6167 21.4241ZM18.8257 19.9881C19.3727 19.9881 19.7967 19.5781 19.7967 19.0311V10.8281C19.7967 10.2811 19.3727 9.8711 18.8257 9.8711C18.2797 9.8711 17.8557 10.2811 17.8557 10.8281V19.0311C17.8557 19.5781 18.2927 19.9881 18.8257 19.9881ZM11.0057 19.4551C11.5527 19.4551 11.9907 19.0171 11.9907 18.4981V11.3611C11.9907 10.8421 11.5527 10.4041 11.0057 10.4041C10.4587 10.4041 10.0487 10.8421 10.0487 11.3611V18.4981C10.0487 19.0311 10.4727 19.4551 11.0057 19.4551ZM16.2287 18.7031C16.7757 18.7031 17.1857 18.2791 17.1857 17.7321V12.1271C17.1857 11.5661 16.7617 11.1561 16.2287 11.1561C15.6957 11.1561 15.2577 11.5801 15.2577 12.1271V17.7321C15.2577 18.2791 15.6957 18.7031 16.2287 18.7031ZM21.4377 17.1031C21.9707 17.1031 22.3947 16.6661 22.3947 16.1191V13.7401C22.3947 13.1801 21.9567 12.7561 21.4377 12.7561C20.8767 12.7561 20.4527 13.1931 20.4527 13.7401V16.1191C20.4527 16.6801 20.8767 17.1031 21.4377 17.1031ZM8.3807 16.5291C8.9417 16.5291 9.3787 16.0921 9.3787 15.5451V14.3141C9.3787 13.7671 8.9417 13.3301 8.3807 13.3301C7.8617 13.3301 7.4237 13.7671 7.4237 14.3141V15.5451C7.4237 16.0921 7.8617 16.5291 8.3807 16.5291Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM13.0837 21.4646C13.5757 21.4646 13.9727 21.0686 13.9727 20.5626V8.3126C13.9727 7.7926 13.5757 7.4106 13.0837 7.4106C12.5777 7.4106 12.1957 7.8066 12.1957 8.3126V20.5626C12.1957 21.0816 12.5777 21.4646 13.0837 21.4646ZM18.4567 19.7966C18.9627 19.7966 19.3457 19.4136 19.3457 18.9086V9.9666C19.3457 9.4606 18.9627 9.0786 18.4567 9.0786C17.9507 9.0786 17.5687 9.4606 17.5687 9.9666V18.9086C17.5687 19.4136 17.9647 19.7966 18.4567 19.7966ZM10.3907 18.8806C10.8967 18.8806 11.2927 18.4846 11.2927 17.9786V10.8826C11.2927 10.3906 10.8967 9.9946 10.3907 9.9946C9.8847 9.9946 9.5017 10.3906 9.5017 10.8826V17.9786C9.5017 18.4846 9.8987 18.8806 10.3907 18.8806ZM15.7777 17.8826C16.2827 17.8826 16.6657 17.4866 16.6657 16.9946V11.8806C16.6657 11.3746 16.2697 10.9926 15.7777 10.9926C15.2717 10.9926 14.8747 11.3886 14.8747 11.8806V16.9946C14.8747 17.4866 15.2717 17.8826 15.7777 17.8826ZM21.1507 16.8026C21.6567 16.8026 22.0387 16.4196 22.0387 15.9136V12.9606C22.0387 12.4546 21.6427 12.0726 21.1507 12.0726C20.6447 12.0726 20.2477 12.4686 20.2477 12.9606V15.9136C20.2477 16.4196 20.6447 16.8026 21.1507 16.8026ZM7.6837 16.2426C8.2027 16.2426 8.5997 15.8456 8.5997 15.3536V13.5216C8.5997 13.0296 8.2027 12.6326 7.6837 12.6326C7.2047 12.6326 6.8087 13.0296 6.8087 13.5216V15.3536C6.8087 15.8456 7.2047 16.2426 7.6837 16.2426Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM13.3707 21.4514C13.8907 21.4514 14.3007 21.0274 14.3007 20.5074V8.9004C14.3007 8.3674 13.8907 7.9574 13.3707 7.9574C12.8377 7.9574 12.4417 8.3804 12.4417 8.9004V20.5074C12.4417 21.0414 12.8377 21.4514 13.3707 21.4514ZM18.6487 19.9064C19.1817 19.9064 19.5777 19.5094 19.5777 18.9904V10.4184C19.5777 9.8984 19.1817 9.5024 18.6487 9.5024C18.1287 9.5024 17.7187 9.8984 17.7187 10.4184V18.9904C17.7187 19.5094 18.1287 19.9064 18.6487 19.9064ZM10.7187 19.1814C11.2517 19.1814 11.6617 18.7714 11.6617 18.2654V11.1424C11.6617 10.6364 11.2517 10.2264 10.7187 10.2264C10.1857 10.2264 9.7887 10.6364 9.7887 11.1424V18.2654C9.7887 18.7854 10.1987 19.1814 10.7187 19.1814ZM16.0097 18.3204C16.5427 18.3204 16.9397 17.9104 16.9397 17.3904V12.0174C16.9397 11.4844 16.5297 11.0884 16.0097 11.0884C15.4907 11.0884 15.0797 11.4984 15.0797 12.0174V17.3904C15.0797 17.9104 15.4907 18.3204 16.0097 18.3204ZM21.3007 16.9664C21.8207 16.9664 22.2167 16.5564 22.2167 16.0374V13.3714C22.2167 12.8384 21.8067 12.4414 21.3007 12.4414C20.7677 12.4414 20.3577 12.8514 20.3577 13.3714V16.0374C20.3577 16.5564 20.7677 16.9664 21.3007 16.9664ZM8.0527 16.3924C8.5997 16.3924 9.0097 15.9824 9.0097 15.4634V13.9454C9.0097 13.4254 8.5997 13.0154 8.0527 13.0154C7.5467 13.0154 7.1367 13.4254 7.1367 13.9454V15.4634C7.1367 15.9824 7.5607 16.3924 8.0527 16.3924Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM12.3187 21.479C12.6877 21.479 12.9747 21.191 12.9747 20.809V6.576C12.9747 6.193 12.6877 5.92 12.3187 5.92C11.9357 5.92 11.6487 6.193 11.6487 6.576V20.809C11.6487 21.191 11.9217 21.479 12.3187 21.479ZM17.8557 19.318C18.2247 19.318 18.5117 19.045 18.5117 18.662V8.723C18.5117 8.354 18.2247 8.066 17.8557 8.066C17.4727 8.066 17.1987 8.354 17.1987 8.723V18.662C17.1987 19.045 17.4727 19.318 17.8557 19.318ZM9.5567 18.266C9.9257 18.266 10.2127 17.992 10.2127 17.609V9.775C10.2127 9.406 9.9257 9.119 9.5567 9.119C9.1737 9.119 8.8867 9.406 8.8867 9.775V17.609C8.8867 17.992 9.1737 18.266 9.5567 18.266ZM15.0797 17.008C15.4627 17.008 15.7497 16.734 15.7497 16.352V11.033C15.7497 10.664 15.4627 10.377 15.0797 10.377C14.7107 10.377 14.4237 10.664 14.4237 11.033V16.352C14.4237 16.734 14.7107 17.008 15.0797 17.008ZM20.6307 16.447C21.0137 16.447 21.2867 16.174 21.2867 15.791V11.594C21.2867 11.211 21.0137 10.938 20.6307 10.938C20.2477 10.938 19.9747 11.225 19.9747 11.594V15.791C19.9747 16.16 20.2477 16.447 20.6307 16.447ZM6.7677 15.695C7.1507 15.695 7.4377 15.408 7.4377 15.039V12.346C7.4377 11.977 7.1507 11.689 6.7677 11.689C6.3987 11.689 6.1117 11.977 6.1117 12.346V15.039C6.1117 15.408 6.4117 15.695 6.7677 15.695Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM12.7417 21.4921C13.2067 21.4921 13.5897 21.1231 13.5897 20.6441V7.6011C13.5897 7.1091 13.2067 6.7401 12.7417 6.7401C12.2637 6.7401 11.8947 7.1091 11.8947 7.6011V20.6441C11.8947 21.1371 12.2497 21.4921 12.7417 21.4921ZM18.2107 19.6601C18.7027 19.6601 19.0727 19.2911 19.0727 18.8261V9.4061C19.0727 8.9281 18.7027 8.5581 18.2107 8.5581C17.7457 8.5581 17.3767 8.9281 17.3767 9.4061V18.8261C17.3767 19.2911 17.7457 19.6601 18.2107 19.6601ZM9.9937 18.4981C10.4727 18.4981 10.8417 18.1291 10.8417 17.6501V10.5681C10.8417 10.1031 10.4727 9.7211 9.9937 9.7211C9.5157 9.7211 9.1467 10.1031 9.1467 10.5681V17.6501C9.1467 18.1291 9.5157 18.4981 9.9937 18.4981ZM15.4767 17.3491C15.9547 17.3491 16.3237 16.9671 16.3237 16.5021V11.7301C16.3237 11.2521 15.9547 10.8831 15.4767 10.8831C15.0117 10.8831 14.6287 11.2521 14.6287 11.7301V16.5021C14.6287 16.9671 15.0117 17.3491 15.4767 17.3491ZM20.9727 16.6111C21.4507 16.6111 21.8067 16.2561 21.8067 15.7641V12.4551C21.8067 11.9761 21.4507 11.6211 20.9727 11.6211C20.4807 11.6211 20.1117 11.9901 20.1117 12.4551V15.7641C20.1117 16.2421 20.4807 16.6111 20.9727 16.6111ZM7.2457 16.0511C7.7247 16.0511 8.0937 15.6811 8.0937 15.2171V13.0151C8.0937 12.5511 7.7247 12.1681 7.2457 12.1681C6.7817 12.1681 6.3987 12.5511 6.3987 13.0151V15.2171C6.3987 15.6811 6.7817 16.0511 7.2457 16.0511Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM12.5507 21.5054C13.0017 21.5054 13.3577 21.1504 13.3577 20.6714V7.1914C13.3577 6.7264 13.0017 6.3714 12.5507 6.3714C12.0857 6.3714 11.7167 6.7264 11.7167 7.1914V20.6714C11.7167 21.1644 12.0727 21.5054 12.5507 21.5054ZM18.0877 19.5914C18.5527 19.5914 18.9077 19.2364 18.9077 18.7714V9.0914C18.9077 8.6274 18.5527 8.2714 18.0877 8.2714C17.6227 8.2714 17.2677 8.6274 17.2677 9.0914V18.7714C17.2677 19.2364 17.6227 19.5914 18.0877 19.5914ZM9.7757 18.2934C10.2407 18.2934 10.5957 17.9234 10.5957 17.4594V10.3904C10.5957 9.9254 10.2407 9.5704 9.7757 9.5704C9.3107 9.5704 8.9547 9.9254 8.9547 10.3904V17.4594C8.9547 17.9234 9.3107 18.2934 9.7757 18.2934ZM15.3127 17.0354C15.7777 17.0354 16.1327 16.6794 16.1327 16.2284V11.6344C16.1327 11.1834 15.7777 10.8144 15.3127 10.8144C14.8617 10.8144 14.4917 11.1834 14.4917 11.6344V16.2284C14.4917 16.6794 14.8617 17.0354 15.3127 17.0354ZM20.8767 16.5024C21.3417 16.5024 21.6837 16.1604 21.6837 15.6814V12.1814C21.6837 11.7034 21.3417 11.3614 20.8767 11.3614C20.3987 11.3614 20.0427 11.7164 20.0427 12.1814V15.6814C20.0427 16.1464 20.3987 16.5024 20.8767 16.5024ZM6.9867 15.9554C7.4647 15.9554 7.8207 15.5864 7.8207 15.1344V12.7284C7.8207 12.2774 7.4647 11.9084 6.9867 11.9084C6.5347 11.9084 6.1797 12.2774 6.1797 12.7284V15.1344C6.1797 15.5864 6.5487 15.9554 6.9867 15.9554Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM12.8927 21.4789C13.3707 21.4789 13.7537 21.0959 13.7537 20.6039V7.9019C13.7537 7.4099 13.3707 7.0269 12.8927 7.0269C12.4007 7.0269 12.0177 7.4099 12.0177 7.9019V20.6039C12.0177 21.1099 12.3867 21.4789 12.8927 21.4789ZM18.3207 19.7289C18.8127 19.7289 19.1957 19.3459 19.1957 18.8669V9.6389C19.1957 9.1599 18.8127 8.7909 18.3207 8.7909C17.8277 8.7909 17.4587 9.1599 17.4587 9.6389V18.8669C17.4587 19.3459 17.8417 19.7289 18.3207 19.7289ZM10.1717 18.6619C10.6507 18.6619 11.0327 18.2789 11.0327 17.8009V10.7049C11.0327 10.2269 10.6507 9.8439 10.1717 9.8439C9.6797 9.8439 9.2967 10.2269 9.2967 10.7049V17.8009C9.2967 18.2929 9.6797 18.6619 10.1717 18.6619ZM15.5997 17.5819C16.0917 17.5819 16.4747 17.1989 16.4747 16.7069V11.7989C16.4747 11.3069 16.0917 10.9379 15.5997 10.9379C15.1207 10.9379 14.7387 11.3069 14.7387 11.7989V16.7069C14.7387 17.1989 15.1207 17.5819 15.5997 17.5819ZM21.0547 16.6929C21.5467 16.6929 21.9027 16.3239 21.9027 15.8319V12.6739C21.9027 12.1819 21.5327 11.8129 21.0547 11.8129C20.5487 11.8129 20.1797 12.1949 20.1797 12.6739V15.8319C20.1797 16.3239 20.5487 16.6929 21.0547 16.6929ZM7.4377 16.1329C7.9297 16.1329 8.3127 15.7499 8.3127 15.2719V13.2349C8.3127 12.7559 7.9297 12.3729 7.4377 12.3729C6.9587 12.3729 6.5757 12.7559 6.5757 13.2349V15.2719C6.5757 15.7499 6.9727 16.1329 7.4377 16.1329Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM12.0177 21.4372C12.2777 21.4372 12.4547 21.2462 12.4547 20.9862V5.7832C12.4547 5.5102 12.2777 5.3322 12.0177 5.3322C11.7437 5.3322 11.5667 5.5102 11.5667 5.7832V20.9862C11.5667 21.2462 11.7437 21.4372 12.0177 21.4372ZM17.5407 18.9762C17.8147 18.9762 17.9917 18.7992 17.9917 18.5392V8.2442C17.9917 7.9842 17.8147 7.7932 17.5407 7.7932C17.2817 7.7932 17.0897 7.9842 17.0897 8.2442V18.5392C17.0897 18.7992 17.2817 18.9762 17.5407 18.9762ZM9.2557 18.2522C9.5157 18.2522 9.6937 18.0602 9.6937 17.8012V8.9692C9.6937 8.7092 9.5157 8.5172 9.2557 8.5172C8.9827 8.5172 8.8047 8.7092 8.8047 8.9692V17.8012C8.8047 18.0602 8.9827 18.2522 9.2557 18.2522ZM14.7797 16.9802C15.0527 16.9802 15.2307 16.8032 15.2307 16.5292V10.2402C15.2307 9.9802 15.0527 9.7892 14.7797 9.7892C14.5197 9.7892 14.3417 9.9802 14.3417 10.2402V16.5292C14.3417 16.8032 14.5197 16.9802 14.7797 16.9802ZM20.3167 16.3922C20.5897 16.3922 20.7677 16.2012 20.7677 15.9412V10.8282C20.7677 10.5682 20.5897 10.3902 20.3167 10.3902C20.0567 10.3902 19.8657 10.5682 19.8657 10.8282V15.9412C19.8657 16.2012 20.0567 16.3922 20.3167 16.3922ZM6.4807 15.3672C6.7407 15.3672 6.9177 15.1762 6.9177 14.9162V11.8532C6.9177 11.5942 6.7407 11.4162 6.4807 11.4162C6.2067 11.4162 6.0297 11.5942 6.0297 11.8532V14.9162C6.0297 15.1762 6.2207 15.3672 6.4807 15.3672Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM11.8537 21.4101C12.0587 21.4101 12.1957 21.2731 12.1957 21.0681V5.3591C12.1957 5.1541 12.0587 5.0171 11.8537 5.0171C11.6487 5.0171 11.5117 5.1541 11.5117 5.3591V21.0681C11.5117 21.2731 11.6487 21.4101 11.8537 21.4101ZM17.3907 18.7991C17.5957 18.7991 17.7327 18.6621 17.7327 18.4571V7.9841C17.7327 7.7791 17.5957 7.6421 17.3907 7.6421C17.1857 7.6421 17.0487 7.7791 17.0487 7.9841V18.4571C17.0487 18.6621 17.1857 18.7991 17.3907 18.7991ZM9.0917 18.2241C9.2967 18.2241 9.4337 18.1011 9.4337 17.8961V8.5451C9.4337 8.3401 9.2967 8.2031 9.0917 8.2031C8.8867 8.2031 8.7637 8.3401 8.7637 8.5451V17.8961C8.7637 18.1011 8.8867 18.2241 9.0917 18.2241ZM14.6287 16.9531C14.8337 16.9531 14.9707 16.8161 14.9707 16.6111V9.8161C14.9707 9.6111 14.8337 9.4881 14.6287 9.4881C14.4237 9.4881 14.2867 9.6111 14.2867 9.8161V16.6111C14.2867 16.8161 14.4237 16.9531 14.6287 16.9531ZM20.1657 16.3511C20.3707 16.3511 20.5077 16.2151 20.5077 16.0101V10.4311C20.5077 10.2261 20.3707 10.0901 20.1657 10.0901C19.9607 10.0901 19.8237 10.2261 19.8237 10.4311V16.0101C19.8237 16.2151 19.9607 16.3511 20.1657 16.3511ZM6.3167 15.1761C6.5217 15.1761 6.6577 15.0531 6.6577 14.8481V11.5941C6.6577 11.3891 6.5217 11.2521 6.3167 11.2521C6.1247 11.2521 5.9887 11.3891 5.9887 11.5941V14.8481C5.9887 15.0531 6.1117 15.1761 6.3167 15.1761Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
