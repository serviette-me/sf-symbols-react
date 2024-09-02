import { IconProps } from "../../types"

export default function FanIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 31.568359375"
          className={className}
        >
          <path
            d="              M30.4607 22.6411C30.4607 18.8121 27.4937 16.3791 21.7657 15.3401C21.7517 15.2711 21.7517 15.2171 21.7517 15.1621H26.6877C29.7637 15.1621 31.5687 13.4121 31.5687 10.4181C31.5687 5.6191 27.2477 1.1071 22.6407 1.1071C18.7987 1.1071 16.3787 4.0741 15.3267 9.8161C15.2717 9.8161 15.2167 9.8161 15.1487 9.8301V4.8811C15.1487 1.8051 13.4117 0.0001 10.4047 0.0001C5.6057 0.0141 1.1077 4.3341 1.1077 8.9281C1.1077 12.7691 4.0747 15.1891 9.8027 16.2421C9.8027 16.2971 9.8167 16.3651 9.8167 16.4201H4.8807C1.7907 16.4201 -0.0003 18.1701 -0.0003 21.1641C-0.0003 25.9631 4.3207 30.4611 8.9277 30.4611C12.7697 30.4611 15.1897 27.4941 16.2287 21.7661C16.2967 21.7661 16.3517 21.7521 16.4067 21.7521V26.6871C16.4067 29.7771 18.1567 31.5681 21.1507 31.5681C25.9497 31.5681 30.4607 27.2481 30.4607 22.6411ZM5.1547 8.9281C5.1547 6.5901 7.8067 4.0471 10.2817 4.0471C10.8557 4.0471 11.1017 4.3071 11.1017 4.8811L11.0877 12.0581C11.0337 12.1411 10.9647 12.2231 10.9097 12.3051C6.9867 11.7301 5.1547 10.6641 5.1547 8.9281ZM22.6407 5.1541C24.9927 5.1541 27.5217 7.8071 27.5217 10.2951C27.5217 10.8691 27.2757 11.1151 26.6877 11.1151L19.5097 11.1011C19.4277 11.0331 19.3457 10.9781 19.2637 10.9101C19.8517 7.0001 20.9047 5.1541 22.6407 5.1541ZM15.7777 17.9921C14.5607 17.9921 13.5767 17.0081 13.5767 15.7911C13.5767 14.5741 14.5607 13.5761 15.7777 13.5761C16.9937 13.5761 17.9927 14.5741 17.9927 15.7911C17.9927 17.0081 16.9937 17.9921 15.7777 17.9921ZM15.7777 17.4451C16.6937 17.4451 17.4317 16.6931 17.4317 15.7911C17.4317 14.8891 16.6937 14.1371 15.7777 14.1371C14.8747 14.1371 14.1227 14.8751 14.1227 15.7911C14.1227 16.6931 14.8747 17.4451 15.7777 17.4451ZM20.4527 26.6871L20.4667 19.5101C20.5347 19.4411 20.6037 19.3591 20.6587 19.2641C24.5687 19.8511 26.4137 20.9181 26.4137 22.6411C26.4137 24.9921 23.7617 27.5351 21.2867 27.5211C20.6997 27.5211 20.4527 27.2751 20.4527 26.6871ZM4.0467 21.2871C4.0467 20.7131 4.2927 20.4671 4.8807 20.4671L12.0587 20.4801C12.1407 20.5491 12.2227 20.6031 12.3047 20.6581C11.7167 24.5821 10.6507 26.4141 8.9277 26.4141C6.5767 26.4141 4.0467 23.7621 4.0467 21.2871Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.48828125 30.48828125"
          className={className}
        >
          <path
            d="              M29.4357 22.1072C29.4357 18.4702 26.4007 16.2832 20.8227 14.8752C20.8087 14.7242 20.7947 14.5742 20.7817 14.4242H26.0997C28.8887 14.4242 30.4887 12.8922 30.4887 10.1722C30.4887 5.5782 26.3457 1.0392 22.1077 1.0392C18.4707 1.0392 16.2697 4.0742 14.8747 9.6522C14.7247 9.6662 14.5747 9.6792 14.4377 9.7072V4.3882C14.4377 1.5862 12.8787 0.0002 10.1717 0.0002C5.5777 0.0002 1.0527 4.1422 1.0527 8.3812C1.0527 12.0172 4.0747 14.2052 9.6657 15.6132C9.6657 15.7632 9.6937 15.9142 9.7067 16.0512H4.3887C1.5857 16.0512 -0.0003 17.5952 -0.0003 20.3162C-0.0003 24.9102 4.1287 29.4492 8.3677 29.4492C12.0177 29.4492 14.2047 26.4002 15.6137 20.8222C15.7637 20.8082 15.9137 20.7952 16.0507 20.7812V26.0992C16.0507 28.9022 17.5957 30.4882 20.3027 30.4882C24.8967 30.4882 29.4357 26.3452 29.4357 22.1072ZM4.1157 8.3812C4.1157 5.8382 7.2457 3.0622 10.1037 3.0622C11.0337 3.0622 11.3617 3.4182 11.3617 4.3882V11.2242C10.9647 11.6072 10.6227 12.0582 10.3497 12.5372C6.2067 11.5392 4.1157 10.3632 4.1157 8.3812ZM22.1077 4.1152C24.6507 4.1152 27.4257 7.2462 27.4257 10.1172C27.4257 11.0332 27.0707 11.3612 26.0997 11.3612L19.2497 11.3472C18.8677 10.9512 18.4297 10.6232 17.9517 10.3492C18.9497 6.2072 20.1247 4.1152 22.1077 4.1152ZM15.2437 17.8832C13.7817 17.8832 12.6057 16.6932 12.6057 15.2442C12.6057 13.7812 13.7817 12.5922 15.2437 12.5922C16.6937 12.5922 17.8967 13.7812 17.8967 15.2442C17.8967 16.6932 16.6937 17.8832 15.2437 17.8832ZM15.2437 17.0352C16.2427 17.0352 17.0487 16.2422 17.0487 15.2442C17.0487 14.2462 16.2287 13.4262 15.2437 13.4262C14.2327 13.4262 13.4397 14.2322 13.4397 15.2442C13.4397 16.2422 14.2327 17.0352 15.2437 17.0352ZM20.3707 27.4122C19.4547 27.4122 19.1267 27.0702 19.1267 26.0992V19.2502C19.5237 18.8672 19.8657 18.4292 20.1387 17.9512C24.2817 18.9492 26.3727 20.1252 26.3727 22.1072C26.3727 24.6502 23.2287 27.4262 20.3707 27.4122ZM3.0627 20.3712C3.0627 19.4552 3.4177 19.1272 4.3887 19.1272H11.2247C11.6077 19.5232 12.0447 19.8652 12.5367 20.1382C11.5257 24.2812 10.3637 26.3732 8.3677 26.3732C5.8377 26.3732 3.0627 23.2422 3.0627 20.3712Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.0625 31.0625"
          className={className}
        >
          <path
            d="              M29.9827 22.3943C29.9827 18.6483 26.9887 16.3383 21.3147 15.1213C21.3147 15.0113 21.3007 14.9163 21.2867 14.8063H26.4007C29.3537 14.8063 31.0627 13.1663 31.0627 10.2953C31.0627 5.6053 26.8247 1.0803 22.3947 1.0803C18.6487 1.0803 16.3247 4.0743 15.1207 9.7343C15.0117 9.7483 14.9157 9.7483 14.8067 9.7613V4.6483C14.8067 1.6953 13.1657 0.0003 10.2947 0.0003C5.5917 0.0003 1.0797 4.2383 1.0797 8.6683C1.0797 12.4143 4.0747 14.7243 9.7347 15.9413C9.7477 16.0373 9.7477 16.1463 9.7617 16.2423H4.6487C1.6957 16.2423 -0.0003 17.8963 -0.0003 20.7543C-0.0003 25.4573 4.2387 29.9823 8.6677 29.9823C12.4137 29.9823 14.7247 26.9883 15.9417 21.3143C16.0367 21.3143 16.1467 21.3003 16.2427 21.2873V26.4143C16.2427 29.3533 17.8967 31.0623 20.7537 31.0623C25.4567 31.0623 29.9827 26.8243 29.9827 22.3943ZM4.6617 8.6683C4.6617 6.2343 7.5467 3.5823 10.1997 3.5823C10.9377 3.5823 11.2247 3.8823 11.2247 4.6483L11.2107 11.6483C11.0057 11.8813 10.8147 12.1403 10.6367 12.4003C6.6177 11.6343 4.6617 10.5133 4.6617 8.6683ZM22.3947 4.6623C24.8277 4.6623 27.4667 7.5473 27.4667 10.1993C27.4667 10.9373 27.1797 11.2243 26.4007 11.2243L19.4137 11.2113C19.1677 11.0063 18.9217 10.8143 18.6487 10.6363C19.4277 6.6173 20.5347 4.6623 22.3947 4.6623ZM15.5317 17.9373C14.1917 17.9373 13.1117 16.8573 13.1117 15.5313C13.1117 14.2053 14.1917 13.1113 15.5317 13.1113C16.8577 13.1113 17.9377 14.1913 17.9377 15.5313C17.9377 16.8573 16.8577 17.9373 15.5317 17.9373ZM15.5317 17.2543C16.4747 17.2543 17.2537 16.4743 17.2537 15.5313C17.2537 14.5883 16.4747 13.8083 15.5317 13.8083C14.5747 13.8083 13.7947 14.5743 13.7947 15.5313C13.7947 16.4743 14.5747 17.2543 15.5317 17.2543ZM19.8247 26.4143L19.8377 19.4143C20.0567 19.1813 20.2477 18.9223 20.4117 18.6623C24.4317 19.4273 26.4007 20.5483 26.4007 22.3943C26.4007 24.8283 23.5157 27.4803 20.8497 27.4663C20.1117 27.4663 19.8247 27.1793 19.8247 26.4143ZM3.5817 20.8633C3.5817 20.1113 3.8827 19.8243 4.6487 19.8243L11.6487 19.8383C11.8807 20.0563 12.1267 20.2483 12.4007 20.4123C11.6207 24.4453 10.5137 26.4003 8.6677 26.4003C6.2207 26.4003 3.5817 23.5153 3.5817 20.8633Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.90234375 28.916015625"
          className={className}
        >
          <path
            d="              M27.7127 21.1503C27.7127 17.8423 24.8417 15.9273 19.4547 14.3833C19.4417 14.0823 19.4137 13.7813 19.3597 13.4943H25.1977C27.5627 13.4943 28.9027 12.2093 28.9027 9.9263C28.9027 5.5923 25.0607 1.1893 21.1367 1.1893C17.8277 1.1893 15.9137 4.0743 14.3687 9.4613C14.0687 9.4613 13.7817 9.4883 13.4937 9.5433V3.7053C13.4937 1.3403 12.1957 0.0003 9.9117 0.0003C5.5777 0.0133 1.1897 3.8423 1.1897 7.7653C1.1897 11.0743 4.0607 12.9883 9.4607 14.5333C9.4607 14.8343 9.4887 15.1343 9.5427 15.4083H3.6917C1.3267 15.4083 -0.0003 16.7073 -0.0003 18.9903C-0.0003 23.3243 3.8277 27.7263 7.7517 27.7263C11.0607 27.7263 12.9887 24.8423 14.5337 19.4553C14.8337 19.4413 15.1207 19.4143 15.4087 19.3593V25.2113C15.4087 27.5763 16.6937 28.9163 18.9767 28.9163C23.3107 28.9163 27.7127 25.0743 27.7127 21.1503ZM2.8027 7.7653C2.8027 4.7033 6.4667 1.6133 9.9117 1.6133C11.2927 1.6133 11.8947 2.2563 11.8947 3.7053V10.1583C10.8687 10.7733 10.0897 11.7443 9.7067 12.8923C5.1547 11.5663 2.8027 10.1583 2.8027 7.7653ZM21.1367 2.8163C24.1997 2.8163 27.2887 6.4803 27.2887 9.9263C27.2887 11.3063 26.6467 11.8943 25.1977 11.8943H18.7437C18.1287 10.8693 17.1587 10.0903 16.0237 9.7073C17.3497 5.1683 18.7437 2.8163 21.1367 2.8163ZM14.4517 17.8013C12.6057 17.8013 11.1017 16.2973 11.1017 14.4513C11.1017 12.6053 12.6057 11.0743 14.4517 11.0743C16.2837 11.0743 17.8277 12.6053 17.8277 14.4513C17.8277 16.2973 16.2837 17.8013 14.4517 17.8013ZM14.4517 16.3923C15.5447 16.3923 16.4067 15.5313 16.4067 14.4513C16.4067 13.3713 15.5317 12.4823 14.4517 12.4823C13.3577 12.4823 12.4957 13.3433 12.4957 14.4513C12.4957 15.5453 13.3577 16.3923 14.4517 16.3923ZM18.9767 27.2893C17.6097 27.2893 17.0077 26.6603 17.0077 25.2113V18.7443C18.0337 18.1293 18.8127 17.1723 19.1957 16.0233C23.7477 17.3633 26.0997 18.7583 26.0997 21.1503C26.0997 24.2133 22.4217 27.3023 18.9767 27.2893ZM7.7517 26.0993C4.6897 26.0993 1.6137 22.4353 1.6137 18.9903C1.6137 17.6093 2.2427 17.0083 3.6917 17.0083H10.1587C10.7737 18.0333 11.7307 18.8263 12.8787 19.1953C11.5527 23.7483 10.1587 26.0993 7.7517 26.0993Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.8046875 29.8046875"
          className={className}
        >
          <path
            d="              M28.7927 21.7794C28.7927 18.2654 25.7027 16.2284 20.2207 14.5604C20.2067 14.3554 20.1937 14.1644 20.1527 13.9724H25.7167C28.3417 13.9724 29.8047 12.5644 29.8047 10.0214C29.8047 5.5644 25.7717 1.0114 21.7657 1.0114C18.2657 1.0114 16.2147 4.1014 14.5467 9.5704C14.3557 9.5844 14.1637 9.6114 13.9727 9.6384V4.0744C13.9727 1.4624 12.5507 0.0004 10.0217 0.0004C5.5507 0.0134 1.0117 4.0334 1.0117 8.0254C1.0117 11.5394 4.0877 13.5894 9.5707 15.2574C9.5837 15.4494 9.6117 15.6404 9.6387 15.8184H4.0747C1.4497 15.8184 -0.0003 17.2404 -0.0003 19.7834C-0.0003 24.2404 4.0197 28.8064 8.0117 28.8064C11.5257 28.8064 13.5767 25.7034 15.2437 20.2204C15.4357 20.2074 15.6407 20.1794 15.8317 20.1524V25.7304C15.8317 28.3414 17.2407 29.8044 19.7697 29.8044C24.2267 29.8044 28.7927 25.7854 28.7927 21.7794ZM3.4457 8.0254C3.4457 5.3594 6.8907 2.4474 9.9937 2.4474C11.1287 2.4474 11.5257 2.8574 11.5257 4.0744V10.7734C10.8827 11.2934 10.3637 11.9764 10.0217 12.7424C5.7147 11.4294 3.4457 10.1994 3.4457 8.0254ZM21.7657 3.4454C24.4317 3.4454 27.3577 6.9044 27.3577 10.0074C27.3577 11.1424 26.9337 11.5254 25.7167 11.5254H19.0177C18.4977 10.8824 17.8147 10.3634 17.0487 10.0214C18.3747 5.7284 19.6057 3.4454 21.7657 3.4454ZM14.8887 17.8144C13.2887 17.8144 11.9767 16.5154 11.9767 14.9024C11.9767 13.2894 13.2887 11.9624 14.8887 11.9624C16.5017 11.9624 17.8277 13.2894 17.8277 14.9024C17.8277 16.5154 16.5017 17.8144 14.8887 17.8144ZM14.8887 16.7894C15.9417 16.7894 16.7887 15.9554 16.7887 14.9024C16.7887 13.8494 15.9417 12.9884 14.8887 12.9884C13.8357 12.9884 12.9887 13.8354 12.9887 14.9024C12.9887 15.9684 13.8357 16.7894 14.8887 16.7894ZM18.2657 25.7304L18.2797 19.0314C18.9217 18.4984 19.4417 17.8284 19.7837 17.0624C24.0767 18.3754 26.3457 19.6194 26.3457 21.7794C26.3457 24.4454 22.9007 27.3714 19.7967 27.3574C18.6487 27.3574 18.2657 26.9474 18.2657 25.7304ZM2.4477 19.7964C2.4477 18.6624 2.8577 18.2654 4.0747 18.2654L10.7597 18.2794C11.2927 18.9214 11.9627 19.4414 12.7427 19.7834C11.4157 24.0764 10.1857 26.3454 8.0117 26.3454C5.3597 26.3454 2.4477 22.9004 2.4477 19.7964Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.421875"
          className={className}
        >
          <path
            d="              M28.4237 21.588C28.4237 18.156 25.3067 16.201 19.8787 14.369C19.8657 14.137 19.8377 13.932 19.7967 13.713H25.5117C28.0277 13.713 29.4087 12.373 29.4087 9.939C29.4087 5.564 25.4437 0.984 21.5747 0.984C18.1427 0.984 16.1877 4.115 14.3557 9.529C14.1367 9.543 13.9177 9.57 13.7127 9.611V3.91C13.7127 1.394 12.3597 0 9.9257 0C5.5507 0.014 0.9847 3.965 0.9847 7.834C0.9847 11.266 4.1017 13.234 9.5297 15.066C9.5427 15.285 9.5707 15.49 9.6117 15.695H3.8827C1.3807 15.695 -0.0003 17.049 -0.0003 19.482C-0.0003 23.871 3.9517 28.437 7.8207 28.437C11.2517 28.437 13.2207 25.307 15.0527 19.879C15.2717 19.865 15.4907 19.838 15.6957 19.797V25.525C15.6957 28.041 17.0347 29.422 19.4687 29.422C23.8577 29.422 28.4237 25.457 28.4237 21.588ZM3.0767 7.834C3.0767 5.1 6.6997 2.092 9.9257 2.092C11.1977 2.092 11.6207 2.557 11.6207 3.91V10.527C10.8277 11.129 10.1997 11.936 9.8437 12.893C5.4547 11.375 3.0767 10.103 3.0767 7.834ZM21.5747 3.076C24.3087 3.076 27.3167 6.713 27.3167 9.939C27.3167 11.211 26.8657 11.621 25.5117 11.621H18.8677C18.2797 10.828 17.4727 10.199 16.5297 9.844C18.0337 5.469 19.3047 3.076 21.5747 3.076ZM14.6977 17.787C13.0017 17.787 11.6207 16.406 11.6207 14.711C11.6207 13.016 13.0017 11.621 14.6977 11.621C16.3927 11.621 17.7867 13.016 17.7867 14.711C17.7867 16.406 16.3927 17.787 14.6977 17.787ZM14.6977 16.652C15.7907 16.652 16.6527 15.791 16.6527 14.711C16.6527 13.631 15.7777 12.742 14.6977 12.742C13.6037 12.742 12.7427 13.603 12.7427 14.711C12.7427 15.805 13.6037 16.652 14.6977 16.652ZM17.7867 25.525V18.881C18.5797 18.293 19.2087 17.486 19.5647 16.543C23.9397 18.047 26.3317 19.332 26.3317 21.588C26.3317 24.322 22.7087 27.33 19.4687 27.316C18.1977 27.316 17.7867 26.879 17.7867 25.525ZM7.8207 26.332C5.0857 26.332 2.0917 22.723 2.0917 19.482C2.0917 18.211 2.5297 17.787 3.8827 17.787H10.5277C11.1157 18.594 11.9357 19.209 12.8787 19.564C11.3617 23.953 10.0897 26.332 7.8207 26.332Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.091796875 30.10546875"
          className={className}
        >
          <path
            d="              M29.0667 21.9298C29.0667 18.3608 26.0037 16.2558 20.4807 14.6968C20.4667 14.5198 20.4527 14.3418 20.4257 14.1778H25.8807C28.5747 14.1778 30.0917 12.7008 30.0917 10.0898C30.0917 5.5778 26.0177 1.0258 21.9157 1.0258C18.3477 1.0258 16.2427 4.0878 14.6837 9.6108C14.5197 9.6248 14.3417 9.6388 14.1637 9.6658V4.2108C14.1637 1.5178 12.6877 -0.0002 10.0897 -0.0002C5.5647 0.0138 1.0257 4.0738 1.0257 8.1758C1.0257 11.7438 4.0877 13.8628 9.6117 15.4078C9.6247 15.5858 9.6387 15.7638 9.6657 15.9278H4.2107C1.5037 15.9278 -0.0003 17.4038 -0.0003 20.0158C-0.0003 24.5278 4.0747 29.0798 8.1757 29.0798C11.7307 29.0798 13.8497 26.0178 15.3947 20.4808C15.5727 20.4668 15.7497 20.4528 15.9277 20.4258V25.8948C15.9277 28.5878 17.3907 30.1058 20.0017 30.1058C24.5137 30.1058 29.0667 26.0308 29.0667 21.9298ZM3.7327 8.1758C3.7327 5.5778 7.0407 2.7068 10.0487 2.7068C11.0877 2.7068 11.4567 3.1038 11.4567 4.2108V10.9648C10.9097 11.4298 10.4727 12.0038 10.1587 12.6598C5.9337 11.4708 3.7327 10.2678 3.7327 8.1758ZM21.9157 3.7328C24.5277 3.7328 27.3847 7.0548 27.3847 10.0488C27.3847 11.1018 26.9887 11.4568 25.8807 11.4568H19.1267C18.6617 10.9238 18.0877 10.4728 17.4457 10.1578C18.6207 5.9338 19.8247 3.7328 21.9157 3.7328ZM15.0387 17.8418C13.5077 17.8418 12.2497 16.5978 12.2497 15.0528C12.2497 13.5078 13.4937 12.2358 15.0387 12.2358C16.5837 12.2358 17.8557 13.5078 17.8557 15.0528C17.8557 16.5978 16.5837 17.8418 15.0387 17.8418ZM15.0387 16.8988C16.0777 16.8988 16.8987 16.0778 16.8987 15.0528C16.8987 14.0278 16.0647 13.1798 15.0387 13.1798C14.0137 13.1798 13.1797 14.0138 13.1797 15.0528C13.1797 16.0918 14.0137 16.8988 15.0387 16.8988ZM20.0427 27.3848C18.9907 27.3848 18.6347 27.0018 18.6347 25.8948L18.6487 19.1408C19.1817 18.6618 19.6187 18.1018 19.9337 17.4588C24.1587 18.6348 26.3597 19.8378 26.3597 21.9298C26.3597 24.5408 23.0367 27.3988 20.0427 27.3848ZM2.7067 20.0568C2.7067 19.0038 3.0897 18.6348 4.2107 18.6348L10.9517 18.6488C11.4297 19.1818 12.0037 19.6188 12.6467 19.9338C11.4707 24.1718 10.2537 26.3598 8.1757 26.3598C5.5647 26.3598 2.7067 23.0508 2.7067 20.0568Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.232421875 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 18.8675C14.4237 18.8675 14.7387 18.8395 15.0257 18.7715V24.8005C15.0257 26.9745 16.2427 28.2465 18.3477 28.2465C22.5997 28.2465 26.7697 24.5685 26.7697 20.5765C26.7697 17.4315 24.2267 15.5585 18.8537 14.4105C18.8537 14.3145 18.8677 14.2185 18.8677 14.1235C18.8677 13.8085 18.8267 13.5075 18.7717 13.2075H24.8007C26.9607 13.2075 28.2327 11.9905 28.2327 9.8985C28.2327 5.6325 24.5687 1.4625 20.5627 1.4625C17.4177 1.4625 15.5587 4.0195 14.3967 9.3785C14.3007 9.3785 14.2047 9.3785 14.1227 9.3785C13.8087 9.3785 13.5077 9.4065 13.2067 9.4605V3.4455C13.2067 1.2715 11.9907 0.0005 9.8847 0.0005C5.6327 0.0005 1.4627 3.6775 1.4627 7.6695C1.4627 10.8145 4.0057 12.6875 9.3787 13.8355C9.3787 13.9315 9.3787 14.0275 9.3787 14.1235C9.3787 14.4375 9.4067 14.7385 9.4607 15.0395H3.4317C1.2717 15.0395 -0.0003 16.2555 -0.0003 18.3475C-0.0003 22.6135 3.6637 26.7835 7.6697 26.7835C10.8147 26.7835 12.6737 24.2265 13.8357 18.8535C13.9317 18.8675 14.0277 18.8675 14.1227 18.8675ZM2.4477 7.6695C2.4477 4.1835 6.1797 0.9985 9.8847 0.9985C11.4157 0.9985 12.2497 1.8595 12.2497 3.4455V9.7615C10.9377 10.3225 9.9257 11.4575 9.5427 12.8655C4.7437 11.8265 2.4477 10.2535 2.4477 7.6695ZM20.5627 2.4605C24.0627 2.4605 27.2477 6.1795 27.2477 9.8985C27.2477 11.4295 26.3727 12.2635 24.8007 12.2635H18.4847C17.9097 10.9375 16.7757 9.9395 15.3807 9.5425C16.4197 4.7575 17.9787 2.4605 20.5627 2.4605ZM14.1227 17.8285C12.0857 17.8285 10.4047 16.1605 10.4047 14.1095C10.4047 12.0725 12.0587 10.3635 14.1227 10.3635C16.1467 10.3635 17.8687 12.0585 17.8687 14.1095C17.8687 16.1605 16.1467 17.8285 14.1227 17.8285ZM14.1227 16.0375C15.2167 16.0375 16.0647 15.1895 16.0647 14.1095C16.0647 13.0295 15.2027 12.1545 14.1227 12.1545C13.0297 12.1545 12.1817 13.0015 12.1817 14.1095C12.1817 15.1895 13.0297 16.0375 14.1227 16.0375ZM15.9827 24.8005V18.4845C17.2947 17.9235 18.3067 16.7755 18.6897 15.3805C23.4887 16.4195 25.7847 17.9925 25.7847 20.5765C25.7847 24.0625 22.0527 27.2485 18.3477 27.2485C16.8167 27.2485 15.9827 26.3865 15.9827 24.8005ZM7.6697 25.7855C4.1697 25.7855 0.9977 22.0665 0.9977 18.3475C0.9977 16.8165 1.8597 15.9825 3.4317 15.9825H9.7477C10.3227 17.2945 11.4567 18.3065 12.8517 18.6895C11.8127 23.4885 10.2537 25.7855 7.6697 25.7855Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 18.5667C14.2457 18.5667 14.5467 18.5257 14.8337 18.4707V24.5957C14.8337 26.6597 16.0237 27.8907 18.0197 27.8907C22.2437 27.8907 26.2907 24.3087 26.2907 20.2757C26.2907 17.2127 23.9117 15.3667 18.5387 14.4237C18.5527 14.2597 18.5667 14.1097 18.5667 13.9457C18.5667 13.6447 18.5257 13.3437 18.4707 13.0567H24.5817C26.6597 13.0567 27.8907 11.8807 27.8907 9.8707C27.8907 5.6597 24.3087 1.5997 20.2757 1.5997C17.2127 1.5997 15.3677 3.9917 14.4237 9.3517C14.2597 9.3377 14.1097 9.3377 13.9457 9.3377C13.6447 9.3377 13.3437 9.3647 13.0567 9.4197V3.3087C13.0567 1.2307 11.8807 -0.0003 9.8707 -0.0003C5.6597 -0.0003 1.5997 3.5817 1.5997 7.6287C1.5997 10.6777 3.9927 12.5237 9.3517 13.4807C9.3377 13.6307 9.3377 13.7947 9.3377 13.9457C9.3377 14.2457 9.3657 14.5467 9.4197 14.8337H3.3087C1.2307 14.8337 -0.0003 16.0237 -0.0003 18.0197C-0.0003 22.2437 3.5817 26.2907 7.6287 26.2907C10.6777 26.2907 12.5237 23.9117 13.4807 18.5387C13.6307 18.5527 13.7817 18.5667 13.9457 18.5667ZM2.2697 7.6287C2.2697 3.9097 6.0297 0.6697 9.8707 0.6697C11.4847 0.6697 12.4417 1.6547 12.4417 3.3087V9.5837C10.9787 10.0897 9.8437 11.3207 9.4747 12.8237C4.5387 11.9627 2.2697 10.3087 2.2697 7.6287ZM20.2757 2.2697C23.9937 2.2697 27.2207 6.0297 27.2207 9.8707C27.2207 11.4847 26.2367 12.4417 24.5817 12.4417H18.3067C17.8007 10.9787 16.5837 9.8577 15.0667 9.4747C15.9417 4.5387 17.5957 2.2697 20.2757 2.2697ZM13.9457 17.8417C11.8127 17.8417 10.0347 16.0777 10.0347 13.9317C10.0347 11.7987 11.7847 9.9937 13.9457 9.9937C16.0777 9.9937 17.8827 11.7717 17.8827 13.9317C17.8827 16.0777 16.0777 17.8417 13.9457 17.8417ZM13.9457 15.8457C15.0527 15.8457 15.9007 15.0117 15.9007 13.9317C15.9007 12.8517 15.0257 11.9767 13.9457 11.9767C12.8657 11.9767 12.0317 12.8237 12.0317 13.9317C12.0317 15.0117 12.8657 15.8457 13.9457 15.8457ZM15.4497 24.5957V18.3067C16.9117 17.8007 18.0467 16.5837 18.4157 15.0667C23.3517 15.9417 25.6207 17.5957 25.6207 20.2757C25.6207 23.9937 21.8617 27.2207 18.0197 27.2207C16.4067 27.2207 15.4497 26.2367 15.4497 24.5957ZM7.6287 25.6207C3.9097 25.6207 0.6697 21.8747 0.6697 18.0197C0.6697 16.4067 1.6547 15.4487 3.3087 15.4487H9.5837C10.0897 16.9117 11.3207 18.0467 12.8247 18.4297C11.9627 23.3517 10.3087 25.6207 7.6287 25.6207Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}