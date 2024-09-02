import { IconProps } from "../../types"

export default function PoweroutletTypeHIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM9.4747 17.0491C11.0057 17.0491 12.2497 15.7911 12.2497 14.2731C12.2497 12.7421 11.0057 11.4841 9.4747 11.4841C7.9437 11.4841 6.6987 12.7421 6.6987 14.2731C6.6987 15.7911 7.9437 17.0491 9.4747 17.0491ZM20.3987 17.0491C21.9297 17.0491 23.1737 15.7911 23.1737 14.2731C23.1737 12.7421 21.9297 11.4841 20.3987 11.4841C18.8667 11.4841 17.6227 12.7421 17.6227 14.2731C17.6227 15.7911 18.8667 17.0491 20.3987 17.0491ZM14.9297 22.9001C16.4607 22.9001 17.7047 21.6421 17.7047 20.1111C17.7047 18.5941 16.4607 17.3361 14.9297 17.3361C13.4117 17.3361 12.1547 18.5941 12.1547 20.1111C12.1547 21.6421 13.4117 22.9001 14.9297 22.9001Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM8.7497 16.4606C10.2267 16.4606 11.4297 15.2576 11.4297 13.7816C11.4297 12.3046 10.2267 11.1016 8.7497 11.1016C7.2737 11.1016 6.0707 12.3046 6.0707 13.7816C6.0707 15.2576 7.2737 16.4606 8.7497 16.4606ZM20.1247 16.4606C21.6017 16.4606 22.8047 15.2576 22.8047 13.7816C22.8047 12.3046 21.6017 11.1016 20.1247 11.1016C18.6487 11.1016 17.4457 12.3046 17.4457 13.7816C17.4457 15.2576 18.6487 16.4606 20.1247 16.4606ZM14.4377 22.5726C15.9137 22.5726 17.1167 21.3826 17.1167 19.9066C17.1167 18.4296 15.9137 17.2266 14.4377 17.2266C12.9607 17.2266 11.7577 18.4296 11.7577 19.9066C11.7577 21.3826 12.9607 22.5726 14.4377 22.5726Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM9.1327 16.7754C10.6367 16.7754 11.8667 15.5454 11.8667 14.0414C11.8667 12.5374 10.6367 11.3204 9.1327 11.3204C7.6287 11.3204 6.3987 12.5374 6.3987 14.0414C6.3987 15.5454 7.6287 16.7754 9.1327 16.7754ZM20.2757 16.7754C21.7797 16.7754 22.9957 15.5454 22.9957 14.0414C22.9957 12.5374 21.7797 11.3204 20.2757 11.3204C18.7717 11.3204 17.5407 12.5374 17.5407 14.0414C17.5407 15.5454 18.7717 16.7754 20.2757 16.7754ZM14.6977 22.7504C16.2007 22.7504 17.4317 21.5194 17.4317 20.0154C17.4317 18.5114 16.2007 17.2954 14.6977 17.2954C13.1937 17.2954 11.9767 18.5114 11.9767 20.0154C11.9767 21.5194 13.1937 22.7504 14.6977 22.7504Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM7.7107 15.805C9.1187 15.805 10.2537 14.67 10.2537 13.275C10.2537 11.881 9.1187 10.746 7.7107 10.746C6.3167 10.746 5.1817 11.881 5.1817 13.275C5.1817 14.67 6.3167 15.805 7.7107 15.805ZM19.7147 15.805C21.1097 15.805 22.2437 14.67 22.2437 13.275C22.2437 11.881 21.1097 10.746 19.7147 10.746C18.3207 10.746 17.1717 11.881 17.1717 13.275C17.1717 14.67 18.3207 15.805 19.7147 15.805ZM13.7127 22.094C15.1077 22.094 16.2417 20.959 16.2417 19.564C16.2417 18.17 15.1077 17.035 13.7127 17.035C12.3187 17.035 11.1837 18.17 11.1837 19.564C11.1837 20.959 12.3187 22.094 13.7127 22.094Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM8.2847 16.0781C9.7347 16.0781 10.9097 14.9161 10.9097 13.4671C10.9097 12.0171 9.7347 10.8551 8.2847 10.8551C6.8497 10.8551 5.6737 12.0171 5.6737 13.4671C5.6737 14.9161 6.8497 16.0781 8.2847 16.0781ZM19.9607 16.0781C21.3967 16.0781 22.5727 14.9161 22.5727 13.4671C22.5727 12.0171 21.3967 10.8551 19.9607 10.8551C18.5117 10.8551 17.3357 12.0171 17.3357 13.4671C17.3357 14.9161 18.5117 16.0781 19.9607 16.0781ZM14.1227 22.3671C15.5727 22.3671 16.7347 21.1911 16.7347 19.7561C16.7347 18.3061 15.5727 17.1311 14.1227 17.1311C12.6737 17.1311 11.5117 18.3061 11.5117 19.7561C11.5117 21.1911 12.6737 22.3671 14.1227 22.3671Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM8.0257 15.8734C9.4607 15.8734 10.6097 14.7114 10.6097 13.2894C10.6097 11.8674 9.4607 10.7054 8.0257 10.7054C6.6037 10.7054 5.4547 11.8674 5.4547 13.2894C5.4547 14.7114 6.6037 15.8734 8.0257 15.8734ZM19.8657 15.8734C21.2867 15.8734 22.4357 14.7114 22.4357 13.2894C22.4357 11.8674 21.2867 10.7054 19.8657 10.7054C18.4297 10.7054 17.2817 11.8674 17.2817 13.2894C17.2817 14.7114 18.4297 15.8734 19.8657 15.8734ZM13.9457 22.2444C15.3667 22.2444 16.5297 21.0954 16.5297 19.6734C16.5297 18.2384 15.3667 17.0894 13.9457 17.0894C12.5237 17.0894 11.3617 18.2384 11.3617 19.6734C11.3617 21.0954 12.5237 22.2444 13.9457 22.2444Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM8.4907 16.2419C9.9527 16.2419 11.1287 15.0669 11.1287 13.6039C11.1287 12.1409 9.9527 10.9649 8.4907 10.9649C7.0277 10.9649 5.8517 12.1409 5.8517 13.6039C5.8517 15.0669 7.0277 16.2419 8.4907 16.2419ZM20.0297 16.2419C21.4917 16.2419 22.6677 15.0669 22.6677 13.6039C22.6677 12.1409 21.4917 10.9649 20.0297 10.9649C18.5667 10.9649 17.3907 12.1409 17.3907 13.6039C17.3907 15.0669 18.5667 16.2419 20.0297 16.2419ZM14.2597 22.4629C15.7227 22.4629 16.8987 21.2739 16.8987 19.8109C16.8987 18.3609 15.7227 17.1719 14.2597 17.1719C12.7967 17.1719 11.6207 18.3609 11.6207 19.8109C11.6207 21.2739 12.7967 22.4629 14.2597 22.4629Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM7.3007 15.7502C8.6547 15.7502 9.7757 14.6292 9.7757 13.2752C9.7757 11.9082 8.6547 10.8012 7.3007 10.8012C5.9337 10.8012 4.8257 11.9082 4.8257 13.2752C4.8257 14.6292 5.9337 15.7502 7.3007 15.7502ZM19.5097 15.7502C20.8767 15.7502 21.9847 14.6292 21.9847 13.2752C21.9847 11.9082 20.8767 10.8012 19.5097 10.8012C18.1567 10.8012 17.0487 11.9082 17.0487 13.2752C17.0487 14.6292 18.1567 15.7502 19.5097 15.7502ZM13.4117 21.9022C14.7657 21.9022 15.8727 20.7952 15.8727 19.4412C15.8727 18.0742 14.7657 16.9672 13.4117 16.9672C12.0447 16.9672 10.9377 18.0742 10.9377 19.4412C10.9377 20.7952 12.0447 21.9022 13.4117 21.9022Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM7.0817 15.6951C8.4217 15.6951 9.5297 14.6011 9.5297 13.2621C9.5297 11.9221 8.4217 10.8141 7.0817 10.8141C5.7417 10.8141 4.6487 11.9221 4.6487 13.2621C4.6487 14.6011 5.7417 15.6951 7.0817 15.6951ZM19.4137 15.6951C20.7537 15.6951 21.8617 14.6011 21.8617 13.2621C21.8617 11.9221 20.7537 10.8141 19.4137 10.8141C18.0737 10.8141 16.9807 11.9221 16.9807 13.2621C16.9807 14.6011 18.0737 15.6951 19.4137 15.6951ZM13.2477 21.8061C14.5877 21.8061 15.6957 20.6991 15.6957 19.3591C15.6957 18.0191 14.5877 16.9261 13.2477 16.9261C11.9077 16.9261 10.8147 18.0191 10.8147 19.3591C10.8147 20.6991 11.9077 21.8061 13.2477 21.8061Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}