import { IconProps } from "../../types"

export default function CrossCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM7.6697 15.6821C7.6697 16.8981 8.4907 17.7191 9.7067 17.7191H12.1137V20.1391C12.1137 21.3551 12.9337 22.1621 14.1507 22.1621H15.6957C16.9257 22.1621 17.7327 21.3551 17.7327 20.1391V17.7191H20.1527C21.3687 17.7191 22.1757 16.8981 22.1757 15.6821V14.1371C22.1757 12.9201 21.3687 12.1131 20.1527 12.1131H17.7327V9.6931C17.7327 8.4631 16.9257 7.6701 15.6957 7.6701H14.1507C12.9337 7.6701 12.1137 8.4631 12.1137 9.6931V12.1131H9.6937C8.4907 12.1131 7.6697 12.9201 7.6697 14.1371Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM7.0277 15.5316C7.0277 16.5566 7.7247 17.2536 8.7497 17.2536H11.5937V20.0976C11.5937 21.1506 12.2777 21.8206 13.3167 21.8206H15.5317C16.5707 21.8206 17.2537 21.1506 17.2537 20.0976V17.2536H20.1117C21.1367 17.2536 21.8207 16.5566 21.8207 15.5316V13.3026C21.8207 12.2906 21.1367 11.5936 20.1117 11.5936H17.2537V8.7636C17.2537 7.7106 16.5707 7.0406 15.5317 7.0406H13.3167C12.2777 7.0406 11.5937 7.7106 11.5937 8.7636V11.5936H8.7367C7.7107 11.5936 7.0277 12.2906 7.0277 13.3026Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM7.3687 15.6134C7.3687 16.7484 8.1207 17.5004 9.2557 17.5004H11.8667V20.1254C11.8667 21.2594 12.6187 22.0114 13.7537 22.0114H15.6137C16.7477 22.0114 17.4997 21.2594 17.4997 20.1254V17.5004H20.1387C21.2597 17.5004 22.0117 16.7484 22.0117 15.6134V13.7544C22.0117 12.6324 21.2597 11.8804 20.1387 11.8804H17.4997V9.2554C17.4997 8.1214 16.7477 7.3824 15.6137 7.3824H13.7537C12.6187 7.3824 11.8667 8.1214 11.8667 9.2554V11.8804H9.2417C8.1207 11.8804 7.3687 12.6324 7.3687 13.7544Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM6.3167 15.066C6.3167 15.887 6.8767 16.447 7.6977 16.447H10.9377V19.674C10.9377 20.521 11.4977 21.068 12.3187 21.068H15.0797C15.9137 21.068 16.4607 20.521 16.4607 19.674V16.447H19.7007C20.5347 16.447 21.0817 15.887 21.0817 15.066V12.305C21.0817 11.484 20.5347 10.924 19.7007 10.924H16.4607V7.697C16.4607 6.863 15.9137 6.316 15.0797 6.316H12.3187C11.4977 6.316 10.9377 6.863 10.9377 7.697V10.924H7.6977C6.8767 10.924 6.3167 11.484 6.3167 12.305Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM6.6167 15.4351C6.6167 16.3381 7.2327 16.9531 8.1347 16.9531H11.2657V20.0701C11.2657 21.0001 11.8667 21.6011 12.7827 21.6011H15.4217C16.3377 21.6011 16.9397 21.0001 16.9397 20.0701V16.9531H20.0707C20.9867 16.9531 21.6017 16.3381 21.6017 15.4351V12.7691C21.6017 11.8811 20.9867 11.2651 20.0707 11.2651H16.9397V8.1481C16.9397 7.2321 16.3377 6.6311 15.4217 6.6311H12.7827C11.8667 6.6311 11.2657 7.2321 11.2657 8.1481V11.2651H8.1347C7.2187 11.2651 6.6167 11.8811 6.6167 12.7691Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM6.3847 15.3804C6.3847 16.2144 6.9587 16.7754 7.7797 16.7754H11.0737V20.0564C11.0737 20.9184 11.6347 21.4644 12.4687 21.4644H15.3667C16.2147 21.4644 16.7617 20.9184 16.7617 20.0564V16.7754H20.0567C20.9047 16.7754 21.4647 16.2144 21.4647 15.3804V12.4684C21.4647 11.6484 20.9047 11.0744 20.0567 11.0744H16.7617V7.8064C16.7617 6.9594 16.2147 6.3984 15.3667 6.3984H12.4687C11.6347 6.3984 11.0737 6.9594 11.0737 7.8064V11.0744H7.7797C6.9457 11.0744 6.3847 11.6484 6.3847 12.4684Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM6.7947 15.4769C6.7947 16.4339 7.4377 17.0759 8.3947 17.0759H11.4027V20.0839C11.4027 21.0679 12.0447 21.6969 13.0017 21.6969H15.4767C16.4337 21.6969 17.0757 21.0679 17.0757 20.0839V17.0759H20.0837C21.0407 17.0759 21.6977 16.4339 21.6977 15.4769V13.0019C21.6977 12.0589 21.0407 11.4159 20.0837 11.4159H17.0757V8.4219C17.0757 7.4379 16.4337 6.8089 15.4767 6.8089H13.0017C12.0447 6.8089 11.4027 7.4379 11.4027 8.4219V11.4159H8.3947C7.4377 11.4159 6.7947 12.0589 6.7947 13.0019Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM6.2347 14.6702C6.2347 15.4762 6.7817 16.0232 7.5877 16.0232H10.7597V19.1952C10.7597 20.0022 11.3067 20.5492 12.1137 20.5492H14.6977C15.5037 20.5492 16.0507 20.0022 16.0507 19.1952V16.0232H19.2227C20.0427 16.0232 20.5897 15.4762 20.5897 14.6702V12.0862C20.5897 11.2792 20.0427 10.7322 19.2227 10.7322H16.0507V7.5602C16.0507 6.7402 15.5037 6.2072 14.6977 6.2072H12.1137C11.3067 6.2072 10.7597 6.7402 10.7597 7.5602V10.7322H7.5877C6.7817 10.7322 6.2347 11.2792 6.2347 12.0862Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM6.1937 14.4511C6.1937 15.2441 6.7267 15.7911 7.5327 15.7911H10.6777V18.9221C10.6777 19.7281 11.2107 20.2751 12.0177 20.2751H14.5057C15.3127 20.2751 15.8457 19.7281 15.8457 18.9221V15.7911H18.9907C19.7827 15.7911 20.3297 15.2441 20.3297 14.4511V11.9631C20.3297 11.1561 19.7827 10.6091 18.9907 10.6091H15.8457V7.4781C15.8457 6.6721 15.3127 6.1391 14.5057 6.1391H12.0177C11.2107 6.1391 10.6777 6.6721 10.6777 7.4781V10.6091H7.5327C6.7267 10.6091 6.1937 11.1561 6.1937 11.9631Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
