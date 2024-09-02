import { IconProps } from "../../types"

export default function ChevronDownCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM16.8027 19.0861L21.4917 14.0551C22.1347 13.3571 22.1347 12.2501 21.5327 11.6761C20.8087 10.9921 19.7417 10.9921 19.0997 11.6891L14.9297 16.1741L10.7597 11.6891C10.1167 10.9921 9.0507 10.9921 8.3397 11.6761C7.7247 12.2501 7.7247 13.3301 8.3667 14.0271L13.0567 19.0721C14.0547 20.1521 15.8047 20.1661 16.8027 19.0861Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM16.0507 18.7306L21.0817 13.3576C21.6017 12.7966 21.6157 11.9216 21.1097 11.4436C20.5487 10.8966 19.6877 10.8826 19.1677 11.4436L14.4377 16.4886L9.7067 11.4436C9.1877 10.8826 8.3127 10.8826 7.7517 11.4436C7.2737 11.9356 7.2737 12.7836 7.7927 13.3576L12.8237 18.7166C13.7407 19.7146 15.1207 19.7146 16.0507 18.7306Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM16.4477 18.9224L21.3007 13.7264C21.8887 13.0974 21.8887 12.0994 21.3277 11.5664C20.6857 10.9514 19.7147 10.9514 19.1267 11.5804L14.6977 16.3244L10.2677 11.5804C9.6797 10.9514 8.7087 10.9514 8.0667 11.5664C7.5057 12.1134 7.5057 13.0844 8.0937 13.7264L12.9477 18.9084C13.9047 19.9474 15.4907 19.9614 16.4477 18.9224Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM14.7517 18.17L20.4117 12.264C20.7267 11.922 20.7537 11.43 20.4397 11.115C20.1117 10.801 19.5917 10.773 19.2777 11.115L13.7127 16.939L8.1347 11.115C7.8207 10.773 7.2867 10.787 6.9727 11.115C6.6717 11.443 6.6857 11.922 6.9997 12.264L12.6737 18.17C13.3297 18.881 14.0957 18.867 14.7517 18.17Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM15.5727 18.4841L20.8087 12.9061C21.2597 12.4281 21.2737 11.7171 20.8497 11.2931C20.3707 10.8281 19.6467 10.8141 19.2087 11.2791L14.1227 16.6801L9.0367 11.2791C8.5997 10.8141 7.8477 10.8141 7.3827 11.2931C6.9727 11.7301 6.9867 12.4281 7.4237 12.9061L12.6737 18.4841C13.5487 19.4281 14.6837 19.4281 15.5727 18.4841Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM15.2987 18.3474L20.6577 12.6604C21.0687 12.2224 21.0817 11.5934 20.6987 11.2114C20.2757 10.7874 19.6187 10.7734 19.2367 11.1834L13.9457 16.7894L8.6547 11.1834C8.2577 10.7734 7.5877 10.7734 7.1777 11.2114C6.8087 11.6074 6.8227 12.2224 7.2187 12.6604L12.5917 18.3474C13.4397 19.2634 14.4377 19.2634 15.2987 18.3474Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM15.7777 18.5939L20.9317 13.1109C21.4097 12.5919 21.4237 11.8129 20.9587 11.3609C20.4527 10.8559 19.6597 10.8419 19.1957 11.3479L14.2597 16.5979L9.3237 11.3479C8.8457 10.8419 8.0527 10.8559 7.5467 11.3609C7.1097 11.8129 7.1097 12.5779 7.5877 13.0979L12.7417 18.5799C13.6307 19.5509 14.8747 19.5509 15.7777 18.5939Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM14.0277 17.9512L20.0707 11.7442C20.2887 11.5252 20.3027 11.2242 20.0837 11.0062C19.9067 10.8142 19.5507 10.7872 19.3457 11.0062L13.3987 17.1172L7.4507 11.0062C7.2457 10.7872 6.8907 10.8142 6.7127 11.0062C6.4937 11.2242 6.5077 11.5252 6.7267 11.7442L12.7697 17.9512C13.1657 18.3752 13.6307 18.3612 14.0277 17.9512Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.6577 17.8281L19.9067 11.4711C20.0567 11.3061 20.0707 11.1011 19.9067 10.9371C19.7827 10.8141 19.5367 10.7871 19.3867 10.9511L13.2347 17.2131L7.0957 10.9511C6.9457 10.7871 6.6987 10.8141 6.5757 10.9371C6.3987 11.1011 6.4257 11.3061 6.5757 11.4711L12.8237 17.8281C13.0837 18.1011 13.3847 18.0881 13.6577 17.8281Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}