import { IconProps } from "../../types"

export default function ECircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM12.2907 20.9181H17.4457C18.6347 20.9181 19.3047 20.3161 19.3047 19.2641C19.3047 18.2111 18.6347 17.6091 17.4457 17.6091H13.9587V16.2561H17.4457C18.4027 16.2561 18.9767 15.7501 18.9767 14.8751C18.9767 14.0141 18.4027 13.4941 17.4457 13.4941H13.9587V12.2641H17.4457C18.6347 12.2641 19.3047 11.6621 19.3047 10.6091C19.3047 9.5571 18.6347 8.9551 17.4457 8.9551H12.2907C10.6097 8.9551 9.7477 9.8301 9.7477 11.5251V18.3481C9.7477 20.0431 10.5817 20.9181 12.2907 20.9181Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM11.5387 20.4946H17.3497C18.2107 20.4946 18.7307 20.0156 18.7307 19.2086C18.7307 18.4156 18.2107 17.9376 17.3497 17.9376H12.9337V15.4216H17.1717C17.9097 15.4216 18.3887 15.0256 18.3887 14.3146C18.3887 13.6036 17.9097 13.1936 17.1717 13.1936H12.9337V10.8286H17.3497C18.2107 10.8286 18.7307 10.3496 18.7307 9.5566C18.7307 8.7496 18.2107 8.2716 17.3497 8.2716H11.5387C10.3357 8.2716 9.7347 8.9686 9.7347 10.1716V18.5796C9.7347 19.8106 10.3357 20.4946 11.5387 20.4946Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM11.9357 20.7134H17.4047C18.4297 20.7134 19.0317 20.1794 19.0317 19.2504C19.0317 18.3064 18.4297 17.7734 17.4047 17.7734H13.4807V15.8734H17.3227C18.1697 15.8734 18.7027 15.4084 18.7027 14.6154C18.7027 13.8224 18.1697 13.3574 17.3227 13.3574H13.4807V11.5934H17.4047C18.4297 11.5934 19.0317 11.0604 19.0317 10.1174C19.0317 9.1874 18.4297 8.6404 17.4047 8.6404H11.9357C10.4727 8.6404 9.7477 9.4334 9.7477 10.8964V18.4704C9.7477 19.9334 10.4727 20.7134 11.9357 20.7134Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM10.4867 19.797H17.0217C17.4587 19.797 17.7457 19.51 17.7457 19.086C17.7457 18.662 17.4587 18.375 17.0217 18.375H11.3617V14.205H16.6797C17.1167 14.205 17.4047 13.945 17.4047 13.521C17.4047 13.084 17.1167 12.838 16.6797 12.838H11.3617V8.887H17.0217C17.4587 8.887 17.7457 8.6 17.7457 8.189C17.7457 7.752 17.4587 7.479 17.0217 7.479H10.4867C9.9527 7.479 9.6657 7.861 9.6657 8.422V18.84C9.6657 19.414 9.9527 19.797 10.4867 19.797Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM11.0467 20.2071H17.2817C17.9377 20.2071 18.3617 19.8101 18.3617 19.1811C18.3617 18.5251 17.9377 18.1421 17.2817 18.1421H12.2637V14.8751H16.9937C17.5957 14.8751 18.0057 14.5471 18.0057 13.9451C18.0057 13.3301 17.5957 12.9881 16.9937 12.9881H12.2637V9.8981H17.2817C17.9377 9.8981 18.3617 9.5021 18.3617 8.8731C18.3617 8.2171 17.9377 7.8341 17.2817 7.8341H11.0467C10.1717 7.8341 9.7207 8.4081 9.7207 9.3101V18.7301C9.7207 19.6461 10.1717 20.2071 11.0467 20.2071Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM10.7867 20.0434H17.2537C17.7737 20.0434 18.1567 19.7014 18.1567 19.1544C18.1567 18.5934 17.7737 18.2524 17.2537 18.2524H11.8947V14.5744H16.8987C17.4177 14.5744 17.8007 14.2734 17.8007 13.7404C17.8007 13.1794 17.4177 12.8654 16.8987 12.8654H11.8947V9.3784H17.2537C17.7737 9.3784 18.1567 9.0234 18.1567 8.4764C18.1567 7.9164 17.7737 7.5874 17.2537 7.5874H10.7867C10.0757 7.5874 9.7067 8.0804 9.7067 8.8184V18.8124C9.7067 19.5504 10.0757 20.0434 10.7867 20.0434Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM11.2657 20.3299H17.3087C18.0467 20.3299 18.5257 19.9059 18.5257 19.1949C18.5257 18.4849 18.0467 18.0609 17.3087 18.0609H12.5507V15.1209H17.0627C17.7327 15.1209 18.1697 14.7519 18.1697 14.1099C18.1697 13.4399 17.7327 13.0699 17.0627 13.0699H12.5507V10.2949H17.3087C18.0467 10.2949 18.5257 9.8709 18.5257 9.1599C18.5257 8.4489 18.0467 8.0259 17.3087 8.0259H11.2657C10.2407 8.0259 9.7207 8.6409 9.7207 9.6799V18.6759C9.7207 19.7149 10.2407 20.3299 11.2657 20.3299Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM10.0897 19.4692H16.7347C17.0347 19.4692 17.1987 19.2632 17.1987 19.0042C17.1987 18.7442 17.0347 18.5392 16.7347 18.5392H10.6507V13.7132H16.4067C16.7067 13.7132 16.8707 13.5082 16.8707 13.2622C16.8707 12.9882 16.7067 12.7972 16.4067 12.7972H10.6507V8.2582H16.7347C17.0347 8.2582 17.1987 8.0532 17.1987 7.7932C17.1987 7.5332 17.0347 7.3282 16.7347 7.3282H10.0897C9.7757 7.3282 9.6117 7.5602 9.6117 7.9162V18.8812C9.6117 19.2362 9.7757 19.4692 10.0897 19.4692Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM9.8847 19.2771H16.5837C16.8167 19.2771 16.9117 19.1271 16.9117 18.9491C16.9117 18.7711 16.8167 18.6071 16.5837 18.6071H10.2817V13.4531H16.2697C16.5017 13.4531 16.5977 13.2751 16.5977 13.1111C16.5977 12.9201 16.5017 12.7691 16.2697 12.7691H10.2817V7.9301H16.5837C16.8167 7.9301 16.9117 7.7521 16.9117 7.5881C16.9117 7.4101 16.8167 7.2461 16.5837 7.2461H9.8847C9.6937 7.2461 9.5707 7.3961 9.5707 7.6291V18.8941C9.5707 19.1271 9.6937 19.2771 9.8847 19.2771Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
