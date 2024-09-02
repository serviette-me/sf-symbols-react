import { IconProps } from "../../types"

export default function RightCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM11.2657 21.1641C12.5097 21.1641 13.2757 20.3571 13.2757 18.9491V17.1441H14.1917L15.7637 19.6741C16.4747 20.8081 16.9807 21.1641 17.8557 21.1641C18.9627 21.1641 19.7557 20.4391 19.7557 19.4141C19.7557 18.9351 19.6187 18.5661 19.3187 18.1561L17.9647 16.3241C19.4277 15.9001 20.3027 14.6011 20.3027 12.9611C20.3027 10.3491 18.5117 8.9551 15.2437 8.9551H11.7987C10.1167 8.9551 9.2697 9.8301 9.2697 11.5251V18.9491C9.2697 20.3711 9.9937 21.1641 11.2657 21.1641ZM13.2757 14.1911V11.9081H14.7247C15.5177 11.9081 15.9547 12.3591 15.9547 13.0431C15.9547 13.7261 15.4627 14.1911 14.7247 14.1911Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM10.8417 20.6996C11.8257 20.6996 12.4007 20.0566 12.4007 18.9766V16.3786H14.1367L16.1057 19.5916C16.6247 20.4126 17.0217 20.6996 17.6917 20.6996C18.5527 20.6996 19.1407 20.1386 19.1407 19.3456C19.1407 18.9626 19.0447 18.6626 18.7987 18.3206L17.1037 15.8046C18.6347 15.3266 19.5917 13.9586 19.5917 12.2906C19.5917 9.7616 17.8147 8.2716 14.7927 8.2716H11.1157C9.9257 8.2716 9.3107 8.9686 9.3107 10.1716V18.9766C9.3107 20.0566 9.8577 20.6996 10.8417 20.6996ZM12.4007 14.0956V10.5956H14.4097C15.5857 10.5956 16.3377 11.2516 16.3377 12.3596C16.3377 13.4536 15.5727 14.0956 14.3687 14.0956Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM11.0607 20.9454C12.1957 20.9454 12.8657 20.2204 12.8657 18.9764V16.7894H14.1637L15.9277 19.6464C16.5427 20.6304 16.9937 20.9454 17.7737 20.9454C18.7717 20.9454 19.4687 20.3024 19.4687 19.3864C19.4687 18.9494 19.3457 18.6214 19.0727 18.2384L17.5547 16.0914C19.0447 15.6404 19.9747 14.3144 19.9747 12.6604C19.9747 10.0764 18.1837 8.6404 15.0257 8.6404H11.4707C10.0217 8.6404 9.2827 9.4334 9.2827 10.8964V18.9764C9.2827 20.2204 9.9257 20.9454 11.0607 20.9454ZM12.8657 14.1504V11.2934H14.5737C15.5447 11.2934 16.1327 11.8394 16.1327 12.7284C16.1327 13.6034 15.5177 14.1504 14.5607 14.1504Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM10.2407 19.92C10.7867 19.92 11.0877 19.564 11.0877 19.004V15.135H13.9317L16.4477 19.359C16.7067 19.77 16.9257 19.92 17.3087 19.92C17.7597 19.92 18.0737 19.633 18.0737 19.209C18.0737 18.963 18.0057 18.799 17.8557 18.566L15.5997 14.902C17.2537 14.438 18.3067 13.043 18.3067 11.32C18.3067 8.996 16.6387 7.479 14.0817 7.479H10.2127C9.6797 7.479 9.3927 7.861 9.3927 8.422V19.004C9.3927 19.551 9.7067 19.92 10.2407 19.92ZM11.0877 13.836V8.818H13.9177C15.5317 8.818 16.6247 9.762 16.6247 11.348C16.6247 12.906 15.5587 13.836 13.8767 13.836Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM10.5817 20.3851C11.3887 20.3851 11.8397 19.8651 11.8397 18.9901V15.8731H14.0957L16.3237 19.5231C16.7207 20.1661 17.0487 20.3851 17.5957 20.3851C18.2797 20.3851 18.7577 19.9331 18.7577 19.3051C18.7577 18.9761 18.6617 18.7301 18.4707 18.4301L16.5427 15.4631C18.1287 14.9571 19.1407 13.5491 19.1407 11.8531C19.1407 9.3651 17.3767 7.8341 14.5057 7.8341H10.6637C9.7887 7.8341 9.3377 8.4081 9.3377 9.3101V18.9901C9.3377 19.8381 9.7757 20.3851 10.5817 20.3851ZM11.8397 14.0271V9.7341H14.2047C15.6267 9.7341 16.5837 10.5271 16.5837 11.9221C16.5837 13.2621 15.6407 14.0271 14.1507 14.0271Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM10.4317 20.2074C11.1427 20.2074 11.5387 19.7424 11.5387 18.9904V15.5864H14.0817L16.4477 19.4824C16.7757 20.0154 17.0627 20.2074 17.5407 20.2074C18.1287 20.2074 18.5387 19.8244 18.5387 19.2774C18.5387 18.9764 18.4567 18.7574 18.2797 18.4844L16.2287 15.2714C17.8417 14.7384 18.8807 13.3024 18.8807 11.6074C18.8807 9.1464 17.1167 7.5874 14.3417 7.5874H10.4177C9.7207 7.5874 9.3517 8.0804 9.3517 8.8184V18.9904C9.3517 19.7144 9.7347 20.2074 10.4317 20.2074ZM11.5387 13.9864V9.2554H14.0817C15.6547 9.2554 16.7207 10.1304 16.7207 11.6624C16.7207 13.1524 15.6817 13.9864 14.0277 13.9864Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM10.6917 20.5219C11.5797 20.5219 12.0857 19.9469 12.0857 18.9899V16.0919H14.1097L16.2287 19.5509C16.6797 20.2759 17.0347 20.5219 17.6367 20.5219C18.3887 20.5219 18.9217 20.0289 18.9217 19.3179C18.9217 18.9629 18.8257 18.7029 18.6077 18.3889L16.7887 15.6129C18.3477 15.1209 19.3317 13.7269 19.3317 12.0449C19.3317 9.5429 17.5687 8.0259 14.6287 8.0259H10.8557C9.8437 8.0259 9.3237 8.6409 9.3237 9.6799V18.9899C9.3237 19.9339 9.8167 20.5219 10.6917 20.5219ZM12.0857 14.0549V10.1039H14.2867C15.6137 10.1039 16.4747 10.8419 16.4747 12.1129C16.4747 13.3439 15.6137 14.0549 14.2457 14.0549Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM9.9807 19.5642C10.3087 19.5642 10.4997 19.3452 10.4997 19.0172V14.5332H13.7407L16.4477 19.1952C16.6117 19.4692 16.7477 19.5642 16.9937 19.5642C17.2677 19.5642 17.4587 19.3872 17.4587 19.1272C17.4587 18.9632 17.4177 18.8532 17.2947 18.6622L14.7657 14.4102C16.4747 14.0412 17.5547 12.7012 17.5547 10.9372C17.5547 8.7912 15.9957 7.3282 13.7267 7.3282H9.9527C9.6387 7.3282 9.4607 7.5602 9.4607 7.9162V19.0172C9.4607 19.3322 9.6657 19.5642 9.9807 19.5642ZM10.4997 13.6442V8.2302H13.6987C15.3807 8.2302 16.5157 9.2972 16.5157 10.9512C16.5157 12.5642 15.3807 13.6442 13.6857 13.6442Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM9.8437 19.3731C10.0627 19.3731 10.1987 19.2231 10.1987 19.0171V14.2051H13.6307L16.4477 19.0991C16.5707 19.3051 16.6527 19.3731 16.8437 19.3731C17.0217 19.3731 17.1447 19.2501 17.1447 19.0721C17.1447 18.9491 17.1037 18.8811 17.0077 18.7031L14.3417 14.1501C16.0647 13.8361 17.1717 12.5101 17.1717 10.7321C17.1717 8.6811 15.6817 7.2461 13.5347 7.2461H9.8027C9.6117 7.2461 9.4887 7.3961 9.4887 7.6291V19.0171C9.4887 19.2231 9.6387 19.3731 9.8437 19.3731ZM10.1987 13.5351V7.9301H13.5757C15.2987 7.9301 16.4607 9.0511 16.4607 10.7321C16.4607 12.3871 15.2987 13.5351 13.5757 13.5351Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
