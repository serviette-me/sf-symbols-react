import { IconProps } from "../../types"

export default function PCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM11.8667 21.1641C13.2887 21.1641 14.1227 20.2341 14.1227 18.6891V18.2381H15.5447C18.4847 18.2381 20.3707 16.4331 20.3707 13.5901C20.3707 10.7461 18.5257 8.9551 15.6137 8.9551H12.1547C10.4727 8.9551 9.6247 9.8301 9.6247 11.5251V18.6891C9.6247 20.2481 10.4457 21.1641 11.8667 21.1641ZM14.1227 15.0391V12.1541H14.9567C15.8187 12.1541 16.2147 12.6051 16.2147 13.6031C16.2147 14.5601 15.8047 15.0391 14.9567 15.0391Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM11.4297 20.6996C12.4957 20.6996 13.1117 19.9886 13.1117 18.8396V17.1176H15.1757C17.9787 17.1176 19.8107 15.3806 19.8107 12.7016C19.8107 10.0216 17.9917 8.2716 15.2027 8.2716H11.5667C10.3767 8.2716 9.7617 8.9686 9.7617 10.1716V18.8396C9.7617 19.9886 10.3637 20.6996 11.4297 20.6996ZM13.1117 14.6836V10.7046H14.7247C15.9547 10.7046 16.6527 11.4296 16.6527 12.7016C16.6527 13.9586 15.9547 14.6836 14.7247 14.6836Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM11.6617 20.9454C12.9067 20.9454 13.6447 20.1254 13.6447 18.7714V17.7184H15.3667C18.2387 17.7184 20.0977 15.9414 20.0977 13.1794C20.0977 10.4184 18.2797 8.6404 15.4217 8.6404H11.8807C10.4317 8.6404 9.6937 9.4334 9.6937 10.8964V18.7714C9.6937 20.1384 10.4047 20.9454 11.6617 20.9454ZM13.6447 14.8754V11.4844H14.8477C15.8867 11.4844 16.4197 12.0584 16.4197 13.1794C16.4197 14.2874 15.8727 14.8754 14.8477 14.8754Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM10.7597 19.92C11.3067 19.92 11.6077 19.564 11.6077 18.99V15.504H14.5607C17.0347 15.504 18.7307 13.877 18.7307 11.484C18.7307 9.119 17.0217 7.479 14.5607 7.479H10.7457C10.2127 7.479 9.9257 7.861 9.9257 8.422V18.99C9.9257 19.537 10.2267 19.92 10.7597 19.92ZM11.6077 14.164V8.818H14.3687C15.9827 8.818 17.0627 9.885 17.0627 11.484C17.0627 13.098 15.9827 14.164 14.3687 14.164Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM11.1567 20.3851C11.9907 20.3851 12.4547 19.8241 12.4547 18.9351V16.3921H14.9297C17.6507 16.3921 19.4417 14.6971 19.4417 12.1131C19.4417 9.5561 17.6367 7.8341 14.9567 7.8341H11.1977C10.3227 7.8341 9.8577 8.4081 9.8577 9.3101V18.9351C9.8577 19.8101 10.3227 20.3851 11.1567 20.3851ZM12.4547 14.4511V9.7751H14.5737C16.0367 9.7751 16.9397 10.6501 16.9397 12.1271C16.9397 13.5761 16.0507 14.4511 14.5737 14.4511Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM10.9917 20.2074C11.7167 20.2074 12.0997 19.7284 12.0997 18.9764V15.9824H14.7927C17.4587 15.9824 19.2497 14.3144 19.2497 11.7984C19.2497 9.2834 17.4457 7.5874 14.8067 7.5874H10.9787C10.2817 7.5874 9.9117 8.0804 9.9117 8.8184V18.9764C9.9117 19.7014 10.2947 20.2074 10.9917 20.2074ZM12.0997 14.3144V9.2554H14.4917C16.0917 9.2554 17.0897 10.2264 17.0897 11.7984C17.0897 13.3434 16.1057 14.3144 14.4917 14.3144Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM11.2657 20.5219C12.2087 20.5219 12.7417 19.9059 12.7417 18.8949V16.7069H15.0257C17.7867 16.7069 19.6057 14.9979 19.6057 12.3729C19.6057 9.7619 17.7867 8.0259 15.0667 8.0259H11.3617C10.3497 8.0259 9.8167 8.6409 9.8167 9.6799V18.8949C9.8167 19.8929 10.3357 20.5219 11.2657 20.5219ZM12.7417 14.5469V10.1859H14.6287C16.0097 10.1859 16.8167 10.9919 16.8167 12.3729C16.8167 13.7399 16.0097 14.5469 14.6287 14.5469Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM10.4587 19.5642C10.7867 19.5642 10.9787 19.3452 10.9787 19.0172V14.8612H14.2457C16.4747 14.8612 18.0607 13.2892 18.0607 11.1012C18.0607 8.9142 16.4607 7.3282 14.2457 7.3282H10.4177C10.1167 7.3282 9.9397 7.5602 9.9397 7.8882V19.0172C9.9397 19.3322 10.1447 19.5642 10.4587 19.5642ZM10.9787 13.9592V8.2302H14.2047C15.8457 8.2302 17.0217 9.4332 17.0217 11.1012C17.0217 12.7562 15.8457 13.9592 14.2047 13.9592Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM10.2947 19.3731C10.5137 19.3731 10.6507 19.2231 10.6507 19.0171V14.5191H14.0817C16.1877 14.5191 17.7187 12.9881 17.7187 10.8831C17.7187 8.8051 16.1597 7.2461 14.0817 7.2461H10.2677C10.0627 7.2461 9.9397 7.3961 9.9397 7.6151V19.0171C9.9397 19.2231 10.0897 19.3731 10.2947 19.3731ZM10.6507 13.8491V7.9301H14.1227C15.7777 7.9301 17.0077 9.1871 17.0077 10.8831C17.0077 12.5781 15.7637 13.8491 14.1227 13.8491Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}