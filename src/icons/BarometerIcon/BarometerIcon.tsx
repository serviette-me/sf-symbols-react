import { IconProps } from "../../types"

export default function BarometerIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.9297 18.1151C16.7067 18.1151 18.1567 16.6661 18.1567 14.8891C18.1567 14.6561 18.1287 14.4371 18.0877 14.2191L20.9867 11.3201C21.6697 10.6371 21.6697 9.5431 20.9867 8.8591C20.3027 8.1761 19.2087 8.1761 18.5257 8.8591L15.6547 11.7301C15.4217 11.6761 15.1757 11.6481 14.9297 11.6481C13.1387 11.6481 11.7027 13.0981 11.7027 14.8891C11.7027 15.1351 11.7307 15.3811 11.7847 15.6131L11.1567 16.2281C10.4997 16.8981 10.4867 18.0061 11.1567 18.6891C11.8397 19.3731 12.9477 19.3731 13.6167 18.6891L14.2597 18.0471C14.4787 18.0881 14.6977 18.1151 14.9297 18.1151ZM14.9297 15.6821C14.4787 15.6821 14.1227 15.3261 14.1227 14.8891C14.1227 14.4371 14.4787 14.0821 14.9297 14.0821C15.3667 14.0821 15.7367 14.4371 15.7367 14.8891C15.7367 15.3261 15.3667 15.6821 14.9297 15.6821Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM14.4237 17.5546C16.1467 17.5546 17.5547 16.1466 17.5547 14.4236C17.5547 14.0956 17.4997 13.7816 17.4047 13.4806L20.9867 9.8846C21.5467 9.3376 21.5467 8.4356 20.9867 7.8886C20.4397 7.3286 19.5367 7.3286 18.9907 7.8886L15.4217 11.4566C15.1077 11.3476 14.7657 11.2926 14.4237 11.2926C12.6877 11.2926 11.2797 12.6876 11.2797 14.4236C11.2797 14.7656 11.3477 15.1076 11.4437 15.4216L10.4457 16.4336C9.8987 16.9806 9.8847 17.8826 10.4457 18.4296C10.9917 18.9906 11.8947 18.9906 12.4417 18.4296L13.4667 17.4046C13.7677 17.4996 14.0817 17.5546 14.4237 17.5546ZM14.4237 15.4766C13.8227 15.4766 13.3577 15.0116 13.3577 14.4236C13.3577 13.8356 13.8227 13.3576 14.4237 13.3576C14.9977 13.3576 15.4767 13.8356 15.4767 14.4236C15.4767 15.0116 14.9977 15.4766 14.4237 15.4766Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.6837 17.8554C16.4477 17.8554 17.8687 16.4204 17.8687 14.6704C17.8687 14.3964 17.8417 14.1234 17.7737 13.8774L20.9867 10.6504C21.6157 10.0354 21.6157 9.0234 20.9867 8.4084C20.3707 7.7794 19.3727 7.7794 18.7437 8.4084L15.5447 11.6074C15.2717 11.5254 14.9847 11.4844 14.6837 11.4844C12.9197 11.4844 11.5117 12.9204 11.5117 14.6704C11.5117 14.9704 11.5527 15.2574 11.6207 15.5314L10.8277 16.3244C10.2127 16.9394 10.1987 17.9514 10.8277 18.5804C11.4437 19.1954 12.4547 19.1954 13.0707 18.5804L13.8767 17.7464C14.1367 17.8144 14.4097 17.8554 14.6837 17.8554ZM14.6837 15.5994C14.1637 15.5994 13.7677 15.1754 13.7677 14.6704C13.7677 14.1644 14.1637 13.7404 14.6837 13.7404C15.2027 13.7404 15.6137 14.1644 15.6137 14.6704C15.6137 15.1754 15.2027 15.5994 14.6837 15.5994Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM13.6857 16.516C15.2307 16.516 16.4887 15.258 16.4887 13.713C16.4887 13.248 16.3787 12.824 16.1737 12.441L20.8227 7.793C21.1507 7.465 21.1507 6.932 20.8227 6.604C20.4937 6.275 19.9607 6.275 19.6327 6.604L14.9977 11.238C14.6017 11.033 14.1637 10.91 13.6857 10.91C12.1407 10.91 10.8827 12.168 10.8827 13.713C10.8827 14.178 11.0057 14.629 11.2107 15.025L9.8987 16.338C9.5567 16.666 9.5567 17.199 9.8987 17.527C10.2267 17.855 10.7597 17.855 11.0877 17.527L12.4137 16.201C12.7967 16.393 13.2347 16.516 13.6857 16.516ZM13.6857 15.135C12.8927 15.135 12.2637 14.506 12.2637 13.713C12.2637 12.92 12.8927 12.291 13.6857 12.291C14.4787 12.291 15.1077 12.92 15.1077 13.713C15.1077 14.506 14.4787 15.135 13.6857 15.135Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM14.0957 17.1851C15.7777 17.1851 17.1577 15.8051 17.1577 14.1091C17.1577 13.7261 17.0897 13.3571 16.9527 13.0151L20.9867 8.9691C21.4647 8.5041 21.4647 7.7241 20.9867 7.2461C20.5217 6.7811 19.7417 6.7811 19.2777 7.2461L15.2577 11.2791C14.8887 11.1291 14.5057 11.0471 14.0957 11.0471C12.3867 11.0471 11.0197 12.4281 11.0197 14.1091C11.0197 14.5331 11.1017 14.9161 11.2517 15.2851L9.9807 16.5431C9.5157 17.0211 9.5017 17.7871 9.9807 18.2651C10.4587 18.7301 11.2247 18.7301 11.7027 18.2651L12.9747 16.9801C13.3297 17.1171 13.6987 17.1851 14.0957 17.1851ZM14.0957 15.3401C13.4117 15.3401 12.8657 14.7931 12.8657 14.1091C12.8657 13.4391 13.4117 12.8921 14.0957 12.8921C14.7657 12.8921 15.3127 13.4391 15.3127 14.1091C15.3127 14.7931 14.7657 15.3401 14.0957 15.3401Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.9047 16.9804C15.5727 16.9804 16.9397 15.6134 16.9397 13.9454C16.9397 13.5214 16.8577 13.1114 16.6937 12.7424L20.9867 8.4494C21.4237 8.0254 21.4237 7.3284 20.9867 6.8904C20.5627 6.4664 19.8657 6.4664 19.4417 6.8904L15.1617 11.1834C14.7797 11.0054 14.3557 10.9104 13.9047 10.9104C12.2367 10.9104 10.8687 12.2634 10.8687 13.9454C10.8687 14.3824 10.9647 14.8204 11.1427 15.1894L9.7207 16.6114C9.2967 17.0354 9.2967 17.7464 9.7207 18.1704C10.1447 18.5934 10.8417 18.5934 11.2797 18.1704L12.7147 16.7344C13.0707 16.8844 13.4807 16.9804 13.9047 16.9804ZM13.9047 15.2574C13.1797 15.2574 12.5917 14.6704 12.5917 13.9454C12.5917 13.2074 13.1797 12.6324 13.9047 12.6324C14.6287 12.6324 15.2167 13.2074 15.2167 13.9454C15.2167 14.6704 14.6287 15.2574 13.9047 15.2574Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM14.2327 17.3499C15.9417 17.3499 17.3227 15.9549 17.3227 14.2459C17.3227 13.8909 17.2677 13.5349 17.1447 13.2069L20.9867 9.3649C21.5057 8.8599 21.5057 8.0389 20.9867 7.5199C20.4807 7.0139 19.6597 7.0139 19.1547 7.5199L15.3257 11.3479C14.9847 11.2249 14.6157 11.1559 14.2327 11.1559C12.5237 11.1559 11.1287 12.5369 11.1287 14.2459C11.1287 14.6289 11.2107 14.9979 11.3337 15.3399L10.1857 16.5019C9.6797 16.9939 9.6657 17.8279 10.1857 18.3339C10.6917 18.8399 11.5117 18.8399 12.0177 18.3339L13.1937 17.1719C13.5217 17.2809 13.8637 17.3499 14.2327 17.3499ZM14.2327 15.3949C13.5897 15.3949 13.0837 14.8889 13.0837 14.2459C13.0837 13.6039 13.5897 13.0979 14.2327 13.0979C14.8747 13.0979 15.3807 13.6039 15.3807 14.2459C15.3807 14.8889 14.8747 15.3949 14.2327 15.3949Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM13.3987 15.9002C14.7657 15.9002 15.8867 14.7792 15.8867 13.4122C15.8867 12.9062 15.7367 12.4412 15.4767 12.0452L20.5897 6.9312C20.7947 6.7402 20.7947 6.4262 20.5897 6.2202C20.3987 6.0292 20.0837 6.0292 19.8787 6.2202L14.7657 11.3342C14.3687 11.0742 13.9047 10.9242 13.3987 10.9242C12.0317 10.9242 10.9097 12.0312 10.9097 13.4122C10.9097 13.9182 11.0607 14.3832 11.3207 14.7792L10.1167 15.9822C9.9257 16.1872 9.9257 16.5022 10.1167 16.6932C10.3227 16.8982 10.6367 16.8982 10.8277 16.6932L12.0447 15.4902C12.4277 15.7502 12.8927 15.9002 13.3987 15.9002ZM13.3987 14.9842C12.5237 14.9842 11.8257 14.2732 11.8257 13.4122C11.8257 12.5372 12.5237 11.8402 13.3987 11.8402C14.2737 11.8402 14.9707 12.5372 14.9707 13.4122C14.9707 14.2732 14.2737 14.9842 13.3987 14.9842Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.2477 15.5721C14.5327 15.5721 15.5727 14.5331 15.5727 13.2481C15.5727 12.7281 15.4077 12.2361 15.1077 11.8531L20.4807 6.4801C20.6167 6.3571 20.6167 6.1521 20.4807 6.0151C20.3437 5.8791 20.1387 5.8791 20.0157 6.0151L14.6427 11.3891C14.2597 11.0881 13.7677 10.9241 13.2477 10.9241C11.9627 10.9241 10.9237 11.9631 10.9237 13.2481C10.9237 13.7671 11.1017 14.2461 11.3887 14.6421L10.2407 15.7911C10.1037 15.9281 10.1037 16.1331 10.2407 16.2561C10.3637 16.3921 10.5687 16.3921 10.7047 16.2561L11.8537 15.1071C12.2497 15.3941 12.7287 15.5721 13.2477 15.5721ZM13.2477 14.8891C12.3457 14.8891 11.6077 14.1501 11.6077 13.2481C11.6077 12.3321 12.3457 11.5941 13.2477 11.5941C14.1637 11.5941 14.9027 12.3321 14.9027 13.2481C14.9027 14.1501 14.1637 14.8891 13.2477 14.8891Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
