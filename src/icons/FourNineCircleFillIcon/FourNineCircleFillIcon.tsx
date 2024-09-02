import { IconProps } from "../../types"

export default function FourNineCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM18.0877 16.5291C16.3657 16.5291 15.6957 14.7931 15.6957 13.0571C15.6957 10.9651 16.8437 9.1461 19.0317 9.1461C21.9707 9.1461 22.7497 12.4141 22.7497 14.8891C22.7497 17.7871 21.8887 20.7131 19.0037 20.7131C17.6777 20.7131 16.5157 20.1521 16.1467 18.8811C16.0917 18.7171 16.0647 18.4571 16.0647 18.3201C16.0647 17.7191 16.3787 17.1441 17.1987 17.1441C17.7737 17.1441 18.1157 17.3771 18.3887 17.9241C18.6207 18.3611 18.7987 18.5251 19.0997 18.5251C19.7287 18.5251 20.0707 17.5271 20.0707 15.5861V14.7791H20.0427C19.8107 15.7231 19.1957 16.5291 18.0877 16.5291ZM12.0727 20.5901C11.3477 20.5901 10.7327 20.1801 10.7327 19.2361V18.5661H8.5587C7.4787 18.5661 6.9457 18.0331 6.9457 17.0211C6.9457 16.4881 7.0817 15.8731 7.2737 15.2851L8.4357 12.0451C8.9277 10.6501 9.4337 9.2831 11.2387 9.2831C12.5507 9.2831 13.4117 10.0081 13.4117 11.3201V16.3511H13.5217C14.2327 16.3511 14.5737 16.7621 14.5737 17.4591C14.5737 18.0191 14.3417 18.5661 13.5077 18.5661H13.4117V19.2361C13.4117 20.2071 12.8107 20.5901 12.0727 20.5901ZM19.0857 14.5601C19.5647 14.5601 19.8237 13.9731 19.8237 13.0161C19.8237 11.9761 19.5647 11.3751 19.0857 11.3751C18.6077 11.3751 18.3477 11.9631 18.3477 12.9611C18.3477 13.9591 18.6077 14.5601 19.0857 14.5601ZM10.8277 16.4331V11.4301H10.7597L9.2287 16.3381V16.4331Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM17.7457 16.1326C15.9547 16.1326 15.1617 14.3556 15.1617 12.5376C15.1617 10.3906 16.3657 8.5726 18.5257 8.5726C21.4237 8.5726 22.2307 11.7986 22.2307 14.3696C22.2307 17.2536 21.3827 20.3166 18.4977 20.3166C17.1307 20.3166 15.9417 19.6736 15.5997 18.4296C15.5447 18.2516 15.5177 18.0336 15.5177 17.8826C15.5177 17.3496 15.8047 16.8706 16.5157 16.8706C17.0077 16.8706 17.3227 17.0766 17.5547 17.5816C17.8007 18.1016 18.1017 18.4026 18.5667 18.4026C19.6737 18.4026 19.9337 16.5016 19.9337 14.7516V14.2736H19.8927C19.6187 15.3396 18.8807 16.1326 17.7457 16.1326ZM11.5257 20.2206C10.9377 20.2206 10.3497 19.8786 10.3497 19.0316V17.9926H7.6977C6.8087 17.9926 6.3027 17.4996 6.3027 16.6526C6.3027 16.1606 6.4117 15.6816 6.6307 15.1076L8.4627 10.7596C8.9137 9.6116 9.4067 8.6816 10.8007 8.6816C11.9217 8.6816 12.6737 9.3106 12.6737 10.4586V16.0786H12.9747C13.6167 16.0786 13.9047 16.4476 13.9047 17.0356C13.9047 17.5406 13.6577 17.9926 12.9747 17.9926H12.6737V19.0316C12.6737 19.8656 12.1547 20.2206 11.5257 20.2206ZM18.5667 14.3556C19.3187 14.3556 19.6737 13.4946 19.6737 12.4686C19.6737 11.4156 19.3317 10.5136 18.5667 10.5136C17.8417 10.5136 17.4727 11.4156 17.4727 12.4416C17.4727 13.4536 17.8007 14.3556 18.5667 14.3556ZM10.4317 16.1326V10.6506H10.3637L8.3127 16.0376V16.1326Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM17.9377 16.3514C16.1737 16.3514 15.4487 14.6014 15.4487 12.8244C15.4487 10.7054 16.6117 8.8864 18.7987 8.8864C21.7107 8.8864 22.5037 12.1274 22.5037 14.6564C22.5037 17.5414 21.6567 20.5354 18.7577 20.5354C17.4177 20.5354 16.2417 19.9334 15.8867 18.6754C15.8317 18.4984 15.8047 18.2654 15.8047 18.1154C15.8047 17.5544 16.1057 17.0214 16.8707 17.0214C17.4047 17.0214 17.7457 17.2404 18.0057 17.7734C18.2387 18.2524 18.4707 18.4704 18.8537 18.4704C19.7007 18.4704 20.0017 17.0484 20.0017 15.2034V14.5474H19.9747C19.7147 15.5454 19.0447 16.3514 17.9377 16.3514ZM11.8127 20.4254C11.1427 20.4254 10.5547 20.0434 10.5547 19.1404V18.3064H8.1487C7.1637 18.3064 6.6447 17.7874 6.6447 16.8574C6.6447 16.3384 6.7677 15.7914 6.9727 15.2034L8.4487 11.4434C8.9137 10.1724 9.4197 9.0094 11.0327 9.0094C12.2497 9.0094 13.0567 9.6934 13.0567 10.9234V16.2284H13.2617C13.9457 16.2284 14.2597 16.6254 14.2597 17.2674C14.2597 17.8004 14.0137 18.3064 13.2477 18.3064H13.0567V19.1404C13.0567 20.0564 12.4957 20.4254 11.8127 20.4254ZM18.8397 14.4784C19.4417 14.4784 19.7557 13.7544 19.7557 12.7694C19.7557 11.7164 19.4547 10.9644 18.8397 10.9644C18.2517 10.9644 17.9377 11.7034 17.9377 12.7284C17.9377 13.7264 18.2247 14.4784 18.8397 14.4784ZM10.6367 16.2974V11.0744H10.5687L8.7907 16.2014V16.2974Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM17.1037 15.463C15.2577 15.463 14.3557 13.658 14.3557 11.785C14.3557 9.625 15.5177 7.82 17.5547 7.82C20.2617 7.82 21.0687 10.938 21.0687 13.563C21.0687 16.311 20.3027 19.592 17.5277 19.592C16.1877 19.592 15.0667 18.854 14.7387 17.623C14.6837 17.445 14.6567 17.254 14.6567 17.117C14.6567 16.734 14.8617 16.406 15.3397 16.406C15.6677 16.406 15.9007 16.57 16.0777 16.98C16.3377 17.719 16.8167 18.252 17.5547 18.252C19.2907 18.252 19.5237 15.244 19.5237 13.563V13.385H19.4687C19.1817 14.602 18.3207 15.463 17.1037 15.463ZM10.8557 19.523C10.4727 19.523 10.0627 19.277 10.0627 18.703V16.98H6.7537C6.1657 16.98 5.7827 16.584 5.7827 16.037C5.7827 15.682 5.8517 15.381 6.0427 14.943L8.8727 9.023C9.2007 8.313 9.5837 7.902 10.3767 7.902C11.0877 7.902 11.6207 8.299 11.6207 9.119V15.654H12.2637C12.7007 15.654 12.9197 15.928 12.9197 16.311C12.9197 16.693 12.7007 16.98 12.2637 16.98H11.6207V18.703C11.6207 19.223 11.2657 19.523 10.8557 19.523ZM17.5817 14.178C18.7027 14.178 19.2777 12.92 19.2777 11.717C19.2777 10.541 18.7577 9.16 17.5817 9.16C16.4607 9.16 15.9137 10.527 15.9137 11.717C15.9137 12.865 16.4197 14.178 17.5817 14.178ZM10.0897 15.682V9.406H10.0347L7.1917 15.6V15.682Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM17.5277 15.8591C15.6957 15.8591 14.8207 14.0681 14.8207 12.1951C14.8207 10.0081 16.0507 8.2031 18.1977 8.2031C21.0687 8.2031 21.9157 11.3891 21.9157 14.0271C21.9157 16.9121 21.0687 20.0561 18.1837 20.0561C16.7887 20.0561 15.5727 19.3591 15.2437 18.1151C15.2027 17.9511 15.1757 17.7601 15.1757 17.5961C15.1757 17.1171 15.4357 16.6801 16.0647 16.6801C16.5157 16.6801 16.8167 16.8711 17.0217 17.3491C17.2817 17.9241 17.6637 18.3061 18.2247 18.3061C19.6327 18.3061 19.8377 15.8321 19.8377 14.2051V13.9311H19.7967C19.4957 15.0801 18.6757 15.8591 17.5277 15.8591ZM11.1697 19.9741C10.6637 19.9741 10.1167 19.6741 10.1167 18.8941V17.6231H7.1507C6.3847 17.6231 5.9067 17.1441 5.9067 16.4061C5.9067 15.9551 5.9887 15.5451 6.2207 14.9841L8.4907 9.9261C8.9007 8.9551 9.3787 8.2991 10.5137 8.2991C11.5257 8.2991 12.1957 8.8591 12.1957 9.9121V15.8871H12.6327C13.2207 15.8871 13.4807 16.2561 13.4807 16.7481C13.4807 17.2401 13.2207 17.6231 12.6187 17.6231H12.1957V18.8941C12.1957 19.6331 11.7307 19.9741 11.1697 19.9741ZM18.2387 14.2191C19.1547 14.2191 19.5777 13.1801 19.5777 12.1131C19.5777 11.0601 19.1817 9.9531 18.2387 9.9531C17.3357 9.9531 16.9117 11.0471 16.9117 12.1131C16.9117 13.1251 17.2947 14.2191 18.2387 14.2191ZM10.1717 15.9281V10.1311H10.1167L7.7387 15.8461V15.9281Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM17.4047 15.7094C15.5447 15.7094 14.6287 13.9044 14.6287 12.0034C14.6287 9.7894 15.8727 7.9844 18.0197 7.9844C20.8767 7.9844 21.7247 11.1704 21.7247 13.8364C21.7247 16.7204 20.8767 19.9204 17.9917 19.9204C16.5837 19.9204 15.3537 19.1814 15.0527 17.9514C15.0117 17.7874 14.9707 17.6094 14.9707 17.4454C14.9707 16.9804 15.2307 16.5844 15.8187 16.5844C16.2417 16.5844 16.5297 16.7614 16.7207 17.2264C16.9807 17.8284 17.4047 18.2654 18.0327 18.2654C19.6057 18.2654 19.7967 15.4494 19.7967 13.8904V13.7404H19.7417C19.4277 14.9434 18.5667 15.7094 17.4047 15.7094ZM10.9647 19.8244C10.5277 19.8244 9.9807 19.5644 9.9807 18.8124V17.4184H6.8357C6.1387 17.4184 5.6737 16.9534 5.6737 16.2694C5.6737 15.8324 5.7557 15.4624 5.9887 14.9164L8.4907 9.4474C8.8867 8.5724 9.3657 8.0664 10.3637 8.0664C11.2927 8.0664 11.9217 8.6134 11.9217 9.5974V15.7774H12.4277C12.9887 15.7774 13.2347 16.1324 13.2347 16.5844C13.2347 17.0624 12.9747 17.4184 12.4277 17.4184H11.9217V18.8124C11.9217 19.4964 11.4977 19.8244 10.9647 19.8244ZM18.0467 14.1504C19.0587 14.1504 19.5367 13.0024 19.5367 11.9084C19.5367 10.8554 19.0997 9.6384 18.0467 9.6384C17.0627 9.6384 16.5837 10.8554 16.5837 11.9084C16.5837 12.9474 17.0077 14.1504 18.0467 14.1504ZM10.0217 15.8184V9.8434H9.9667L7.4097 15.7224V15.8184Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM17.6227 15.9829C15.8047 15.9829 14.9707 14.1919 14.9707 12.3459C14.9707 10.1719 16.1877 8.3539 18.3477 8.3539C21.2187 8.3539 22.0527 11.5669 22.0527 14.1779C22.0527 17.0629 21.2047 20.1799 18.3207 20.1799C16.9397 20.1799 15.7227 19.4959 15.3947 18.2519C15.3537 18.0879 15.3257 17.8829 15.3257 17.7189C15.3257 17.2269 15.5997 16.7619 16.2557 16.7619C16.7207 16.7619 17.0347 16.9669 17.2537 17.4449C17.4997 18.0059 17.8557 18.3479 18.3747 18.3479C19.6467 18.3479 19.8787 16.1189 19.8787 14.4379V14.0819H19.8377C19.5507 15.2029 18.7577 15.9829 17.6227 15.9829ZM11.3207 20.0839C10.7867 20.0839 10.2127 19.7699 10.2127 18.9489V17.7869H7.3827C6.5757 17.7869 6.0837 17.2949 6.0837 16.5159C6.0837 16.0369 6.1797 15.5999 6.3987 15.0389L8.4767 10.2809C8.9007 9.2419 9.3927 8.4629 10.6367 8.4629C11.6897 8.4629 12.4007 9.0649 12.4007 10.1449V15.9689H12.7827C13.3847 15.9689 13.6577 16.3379 13.6577 16.8709C13.6577 17.3769 13.4117 17.7869 12.7697 17.7869H12.4007V18.9489C12.4007 19.7289 11.9077 20.0839 11.3207 20.0839ZM18.3747 14.2869C19.2227 14.2869 19.6187 13.3169 19.6187 12.2639C19.6187 11.2249 19.2497 10.1859 18.3747 10.1859C17.5547 10.1859 17.1447 11.2109 17.1447 12.2499C17.1447 13.2759 17.5137 14.2869 18.3747 14.2869ZM10.2817 16.0239V10.3629H10.2267L7.9847 15.9279V16.0239Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM16.6937 15.1352C14.8887 15.1352 13.9867 13.3442 13.9867 11.4842C13.9867 9.4202 15.0527 7.6292 16.9527 7.6292C19.4417 7.6292 20.1797 10.6372 20.1797 13.1932C20.1797 15.7912 19.5237 19.1812 16.9257 19.1812C15.6677 19.1812 14.6697 18.4292 14.3277 17.1852C14.2597 17.0082 14.2327 16.8162 14.2327 16.6792C14.2327 16.4062 14.3827 16.2012 14.6977 16.2012C14.9297 16.2012 15.0797 16.3242 15.2027 16.6792C15.4907 17.5952 16.0367 18.2382 16.9117 18.2382C18.8807 18.2382 19.1547 14.9842 19.1547 13.1252V12.9062H19.0997C18.8397 14.1782 18.0057 15.1352 16.6937 15.1352ZM10.7047 19.1132C10.4177 19.1132 10.1717 18.9222 10.1717 18.5662V16.4062H6.6307C6.1937 16.4062 5.9337 16.1192 5.9337 15.7362C5.9337 15.4902 5.9887 15.2712 6.1247 14.9842L9.3787 8.4632C9.6117 7.9702 9.8707 7.6702 10.3907 7.6702C10.8147 7.6702 11.2107 7.8882 11.2107 8.5042V15.4902H12.0447C12.3047 15.4902 12.4957 15.6812 12.4957 15.9412C12.4957 16.2152 12.3317 16.4062 12.0447 16.4062H11.2107V18.5662C11.2107 18.8812 10.9787 19.1132 10.7047 19.1132ZM16.9527 14.2322C18.2387 14.2322 18.9487 12.8242 18.9487 11.4702C18.9487 10.1312 18.2927 8.5452 16.9527 8.5452C15.6677 8.5452 15.0257 10.1032 15.0257 11.4702C15.0257 12.7832 15.6547 14.2322 16.9527 14.2322ZM10.1857 15.5042V8.8322H10.1307L6.9047 15.4492V15.5042Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM16.4887 14.9571C14.6977 14.9571 13.8087 13.1801 13.8087 11.3201C13.8087 9.3101 14.8207 7.5061 16.6387 7.5061C19.0177 7.5061 19.7417 10.4731 19.7417 13.0021C19.7417 15.5041 19.1267 18.9631 16.6117 18.9631C15.4077 18.9631 14.4647 18.1971 14.1227 16.9531C14.0547 16.7621 14.0137 16.5701 14.0137 16.4471C14.0137 16.2281 14.1367 16.0781 14.3687 16.0781C14.5467 16.0781 14.6567 16.1741 14.7657 16.5151C15.0667 17.5271 15.6407 18.2381 16.5837 18.2381C18.6757 18.2381 18.9767 14.8341 18.9767 12.8921V12.6461H18.9217C18.6757 13.9451 17.8417 14.9571 16.4887 14.9571ZM10.6227 18.8941C10.3767 18.8941 10.2267 18.7171 10.2267 18.4841V16.0921H6.5757C6.2207 16.0921 6.0157 15.8731 6.0157 15.5721C6.0157 15.3811 6.0567 15.2031 6.1657 14.9841L9.6387 8.1621C9.8297 7.7791 10.0077 7.5471 10.4047 7.5471C10.6637 7.5471 10.9917 7.6701 10.9917 8.1761V15.3941H11.9217C12.1137 15.3941 12.2907 15.5311 12.2907 15.7361C12.2907 15.9551 12.1547 16.0921 11.9217 16.0921H10.9917V18.4841C10.9917 18.6891 10.8277 18.8941 10.6227 18.8941ZM16.6387 14.2601C17.9917 14.2601 18.7847 12.7691 18.7847 11.3341C18.7847 9.9121 18.0607 8.2301 16.6387 8.2301C15.2577 8.2301 14.5737 9.8711 14.5737 11.3341C14.5737 12.7281 15.2577 14.2601 16.6387 14.2601ZM10.2267 15.3941V8.5171H10.1717L6.7537 15.3671V15.3941Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
