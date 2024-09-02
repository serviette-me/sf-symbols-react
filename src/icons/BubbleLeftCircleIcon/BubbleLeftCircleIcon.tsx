import { IconProps } from "../../types"

export default function BubbleLeftCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM11.9627 22.2991C12.2777 22.2991 12.5507 22.1891 12.8927 21.8611L15.2027 19.8381H18.8257C20.6717 19.8381 21.8617 18.6481 21.8617 16.8031V12.0311C21.8617 10.1991 20.6717 8.9691 18.8257 8.9691H11.0737C9.2287 8.9691 8.0387 10.1991 8.0387 12.0311V16.8031C8.0387 18.6481 9.3787 19.8381 10.8827 19.8381H11.2517V21.5061C11.2517 21.9981 11.5257 22.2991 11.9627 22.2991Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM11.2387 22.0666C11.5387 22.0666 11.7577 21.9566 12.0857 21.6566L14.4647 19.5376H18.5667C20.4807 19.5376 21.6157 18.3746 21.6157 16.4746V11.4976C21.6157 9.6116 20.4807 8.4356 18.5667 8.4356H10.3357C8.4217 8.4356 7.2737 9.6116 7.2737 11.4976V16.4746C7.2737 18.3746 8.4907 19.5376 10.2407 19.5376H10.5817V21.3416C10.5817 21.7926 10.8277 22.0666 11.2387 22.0666Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM11.6207 22.1894C11.9217 22.1894 12.1677 22.0804 12.5097 21.7794L14.8617 19.7014H18.7027C20.5757 19.7014 21.7517 18.5254 21.7517 16.6524V11.7854C21.7517 9.9254 20.5757 8.7364 18.7027 8.7364H10.7187C8.8457 8.7364 7.6837 9.9254 7.6837 11.7854V16.6524C7.6837 18.5254 8.9547 19.7014 10.5687 19.7014H10.9377V21.4374C10.9377 21.9024 11.1977 22.1894 11.6207 22.1894Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM10.0627 21.588C10.2817 21.588 10.4317 21.492 10.6777 21.273L13.1937 19.045H18.3067C20.1527 19.045 21.2327 17.951 21.2327 16.105V10.527C21.2327 8.695 20.1527 7.602 18.3067 7.602H9.1187C7.2737 7.602 6.1937 8.682 6.1937 10.527V16.105C6.1937 17.951 7.2737 19.045 9.1187 19.045H9.5837V21.041C9.5837 21.383 9.7617 21.588 10.0627 21.588Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM10.7737 21.9161C11.0607 21.9161 11.2517 21.8061 11.5667 21.5061L13.9867 19.3321H18.3887C20.3577 19.3321 21.4647 18.1971 21.4647 16.2561V11.1561C21.4647 9.2281 20.3577 8.0941 18.3887 8.0941H9.8577C7.9027 8.0941 6.7947 9.2281 6.7947 11.1561V16.2561C6.7947 18.1971 7.9297 19.3321 9.8297 19.3321H10.1577V21.2191C10.1577 21.6421 10.3907 21.9161 10.7737 21.9161Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM10.5137 21.8344C10.7867 21.8344 10.9647 21.7114 11.2797 21.4234L13.7267 19.2094H18.2927C20.2757 19.2094 21.3687 18.1014 21.3687 16.1194V10.9644C21.3687 9.0094 20.2757 7.8884 18.2927 7.8884H9.5977C7.6157 7.8884 6.5217 8.9964 6.5217 10.9644V16.1194C6.5217 18.1014 7.6157 19.2094 9.5977 19.2094H9.9257V21.1644C9.9257 21.5744 10.1447 21.8344 10.5137 21.8344Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM10.9787 21.9849C11.2657 21.9849 11.4707 21.8749 11.7847 21.5739L14.1917 19.4139H18.4707C20.3987 19.4139 21.5327 18.2789 21.5327 16.3519V11.3069C21.5327 9.3929 20.3987 8.2439 18.4707 8.2439H10.0627C8.1207 8.2439 6.9997 9.3929 6.9997 11.3069V16.3519C6.9997 18.2789 8.1757 19.4139 10.0077 19.4139H10.3497V21.2739C10.3497 21.7109 10.5817 21.9849 10.9787 21.9849Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM9.4607 21.2732C9.6117 21.2732 9.7347 21.2052 9.8847 21.0682L12.4957 18.8122H18.3207C19.9887 18.8122 21.0407 17.7602 21.0407 16.0922V9.9392C21.0407 8.2852 19.9887 7.2322 18.3207 7.2322H8.5037C6.8227 7.2322 5.7697 8.2712 5.7697 9.9392V16.0922C5.7697 17.7732 6.8227 18.8122 8.5037 18.8122H9.1187V20.8902C9.1187 21.1372 9.2557 21.2732 9.4607 21.2732Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM9.1597 21.0961C9.2697 21.0961 9.3787 21.0411 9.4747 20.9591L12.1407 18.6891H18.3207C19.9067 18.6891 20.9457 17.6501 20.9457 16.0641V9.6391C20.9457 8.0531 19.9067 7.0271 18.3207 7.0271H8.1757C6.5897 7.0271 5.5507 8.0391 5.5507 9.6391V16.0641C5.5507 17.6641 6.5897 18.6891 8.1757 18.6891H8.8867V20.8081C8.8867 21.0001 8.9957 21.0961 9.1597 21.0961Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
