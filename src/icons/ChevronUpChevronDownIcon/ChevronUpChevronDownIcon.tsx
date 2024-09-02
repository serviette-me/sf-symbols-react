import { IconProps } from "../../types"

export default function ChevronUpChevronDownIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.05078125 32.29296875"
          className={className}
        >
          <path
            d="              M11.5257 -0.0004C10.5137 -0.0004 9.7067 0.4106 8.8597 1.2166L1.2167 8.5586C0.5057 9.2426 -0.0003 10.0486 -0.0003 10.8966C-0.0003 12.7556 1.5857 14.0136 3.1037 14.0136C3.9097 14.0136 4.7437 13.7536 5.4007 13.1246L11.5257 7.1366L17.6507 13.1246C18.3067 13.7536 19.1407 14.0136 19.9477 14.0136C21.4647 14.0136 23.0507 12.7556 23.0507 10.8966C23.0507 10.0486 22.5317 9.2426 21.8337 8.5586L14.1917 1.2166C13.3437 0.4106 12.5367 -0.0004 11.5257 -0.0004ZM11.5257 32.2926C12.5367 32.2926 13.3437 31.8826 14.1917 31.0626L21.8337 23.7206C22.5317 23.0506 23.0507 22.2446 23.0507 21.3966C23.0507 19.5376 21.4647 18.2656 19.9477 18.2656C19.1407 18.2656 18.3067 18.5386 17.6507 19.1676L11.5257 25.1566L5.4007 19.1676C4.7437 18.5256 3.9097 18.2656 3.1037 18.2656C1.5857 18.2656 -0.0003 19.5376 -0.0003 21.3966C-0.0003 22.2446 0.5057 23.0506 1.2167 23.7206L8.8597 31.0626C9.7067 31.8826 10.5137 32.2926 11.5257 32.2926Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.6171875 29.3125"
          className={className}
        >
          <path
            d="              M10.3087 0.0003C9.6387 0.0003 9.0647 0.2733 8.5177 0.8203L0.7927 8.2303C0.3277 8.6813 -0.0003 9.2283 -0.0003 9.8433C-0.0003 11.1293 1.0667 12.0313 2.1737 12.0313C2.7207 12.0313 3.3087 11.8673 3.7737 11.4023L10.3087 5.0043L16.8437 11.4023C17.3227 11.8533 17.8967 12.0313 18.4437 12.0313C19.5647 12.0313 20.6177 11.1293 20.6177 9.8433C20.6177 9.2283 20.3027 8.6813 19.8377 8.2303L12.1137 0.8203C11.5527 0.2733 10.9927 0.0003 10.3087 0.0003ZM10.3087 29.3123C10.9927 29.3123 11.5527 29.0393 12.1137 28.4923L19.8377 21.0823C20.3027 20.6313 20.6177 20.0843 20.6177 19.4683C20.6177 18.1833 19.5647 17.2813 18.4437 17.2813C17.8967 17.2813 17.3227 17.4593 16.8437 17.9103L10.3087 24.3083L3.7737 17.9103C3.3087 17.4453 2.7207 17.2813 2.1737 17.2813C1.0667 17.2813 -0.0003 18.1833 -0.0003 19.4683C-0.0003 20.0843 0.3277 20.6313 0.7927 21.0823L8.5177 28.4923C9.0647 29.0393 9.6387 29.3123 10.3087 29.3123Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.90234375 30.884765625"
          className={className}
        >
          <path
            d="              M10.9517 0.0003C10.1037 0.0003 9.4067 0.3553 8.6957 1.0393L1.0117 8.4083C0.4237 8.9823 -0.0003 9.6663 -0.0003 10.4043C-0.0003 11.9903 1.3397 13.0843 2.6657 13.0843C3.3497 13.0843 4.0607 12.8653 4.6347 12.3183L10.9517 6.1383L17.2677 12.3183C17.8417 12.8653 18.5527 13.0843 19.2367 13.0843C20.5627 13.0843 21.9027 11.9903 21.9027 10.4043C21.9027 9.6663 21.4787 8.9823 20.8907 8.4083L13.2067 1.0393C12.4957 0.3553 11.7987 0.0003 10.9517 0.0003ZM10.9517 30.8843C11.7987 30.8843 12.4957 30.5433 13.2067 29.8593L20.8907 22.4763C21.4787 21.9163 21.9027 21.2323 21.9027 20.4943C21.9027 18.9083 20.5627 17.8003 19.2367 17.8003C18.5527 17.8003 17.8417 18.0333 17.2677 18.5803L10.9517 24.7593L4.6347 18.5803C4.0607 18.0193 3.3497 17.8003 2.6657 17.8003C1.3397 17.8003 -0.0003 18.9083 -0.0003 20.4943C-0.0003 21.2323 0.4237 21.9163 1.0117 22.4763L8.6957 29.8593C9.4067 30.5433 10.1037 30.8843 10.9517 30.8843Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.12890625 25.921875"
          className={className}
        >
          <path
            d="              M9.0647 0C8.7907 0 8.5317 0.123 8.3127 0.328L0.2867 8.08C0.1097 8.258 -0.0003 8.477 -0.0003 8.777C-0.0003 9.311 0.4097 9.707 0.9437 9.707C1.1617 9.707 1.4217 9.652 1.6407 9.434L9.0647 2.16L16.5017 9.434C16.7207 9.639 16.9667 9.707 17.1857 9.707C17.7327 9.707 18.1287 9.311 18.1287 8.777C18.1287 8.477 18.0337 8.258 17.8557 8.08L9.8167 0.328C9.5977 0.123 9.3517 0 9.0647 0ZM9.0647 25.922C9.3517 25.922 9.5977 25.799 9.8167 25.58L17.8557 17.842C18.0337 17.664 18.1287 17.432 18.1287 17.144C18.1287 16.611 17.7327 16.201 17.1857 16.201C16.9667 16.201 16.7207 16.283 16.5017 16.488L9.0647 23.762L1.6407 16.488C1.4217 16.269 1.1617 16.201 0.9437 16.201C0.4097 16.201 -0.0003 16.611 -0.0003 17.144C-0.0003 17.432 0.1097 17.664 0.2867 17.842L8.3127 25.58C8.5317 25.799 8.7907 25.922 9.0647 25.922Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.072265625 27.3984375"
          className={className}
        >
          <path
            d="              M9.5427 0.0003C9.0647 0.0003 8.6677 0.1913 8.2847 0.5473L0.5197 8.0113C0.2047 8.3123 -0.0003 8.6953 -0.0003 9.1743C-0.0003 10.0903 0.7247 10.7593 1.5857 10.7593C1.9687 10.7593 2.3787 10.6503 2.7347 10.2953L9.5427 3.6363L16.3377 10.2953C16.6937 10.6363 17.1037 10.7593 17.4867 10.7593C18.3477 10.7593 19.0727 10.0903 19.0727 9.1743C19.0727 8.6953 18.8677 8.3123 18.5667 8.0113L10.7867 0.5473C10.4047 0.1913 10.0077 0.0003 9.5427 0.0003ZM9.5427 27.3983C10.0077 27.3983 10.4047 27.2073 10.7867 26.8383L18.5667 19.3863C18.8677 19.0863 19.0727 18.7033 19.0727 18.2243C19.0727 17.3083 18.3477 16.6383 17.4867 16.6383C17.1037 16.6383 16.6937 16.7613 16.3377 17.1033L9.5427 23.7483L2.7347 17.1033C2.3787 16.7483 1.9687 16.6383 1.5857 16.6383C0.7247 16.6383 -0.0003 17.3083 -0.0003 18.2243C-0.0003 18.7033 0.2047 19.0863 0.5197 19.3863L8.2847 26.8383C8.6677 27.2073 9.0647 27.3983 9.5427 27.3983Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.197265625 26.33203125"
          className={className}
        >
          <path
            d="              M9.1057 0.0001C8.7497 0.0001 8.4357 0.1371 8.1617 0.4101L0.3557 7.9021C0.1507 8.1071 -0.0003 8.3941 -0.0003 8.7911C-0.0003 9.5021 0.5337 10.0491 1.2437 10.0491C1.5447 10.0491 1.8727 9.9671 2.1597 9.6801L9.1057 2.8851L16.0367 9.6801C16.3377 9.9531 16.6527 10.0491 16.9527 10.0491C17.6637 10.0491 18.1977 9.5021 18.1977 8.7911C18.1977 8.3941 18.0607 8.1071 17.8417 7.9021L10.0347 0.4101C9.7617 0.1371 9.4477 0.0001 9.1057 0.0001ZM9.1057 26.3321C9.4477 26.3321 9.7617 26.1821 10.0347 25.9221L17.8417 18.4301C18.0607 18.2111 18.1977 17.9371 18.1977 17.5271C18.1977 16.8161 17.6637 16.2831 16.9527 16.2831C16.6527 16.2831 16.3377 16.3791 16.0367 16.6521L9.1057 23.4471L2.1597 16.6521C1.8727 16.3651 1.5447 16.2831 1.2437 16.2831C0.5337 16.2831 -0.0003 16.8161 -0.0003 17.5271C-0.0003 17.9371 0.1507 18.2111 0.3557 18.4301L8.1617 25.9221C8.4357 26.1821 8.7497 26.3321 9.1057 26.3321Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.7421875 28.21875"
          className={className}
        >
          <path
            d="              M9.8707 0.0005C9.3107 0.0005 8.8457 0.2185 8.3807 0.6695L0.6287 8.1075C0.2597 8.4625 -0.0003 8.9145 -0.0003 9.4605C-0.0003 10.5415 0.8747 11.3065 1.8317 11.3065C2.2967 11.3065 2.7757 11.1695 3.1857 10.7595L9.8707 4.2245L16.5567 10.7595C16.9667 11.1565 17.4457 11.3065 17.8967 11.3065C18.8677 11.3065 19.7427 10.5415 19.7427 9.4605C19.7427 8.9145 19.4827 8.4625 19.1137 8.1075L11.3617 0.6695C10.8967 0.2185 10.4317 0.0005 9.8707 0.0005ZM9.8707 28.2185C10.4317 28.2185 10.8967 27.9865 11.3617 27.5485L19.1137 20.1115C19.4827 19.7555 19.7427 19.3045 19.7427 18.7575C19.7427 17.6775 18.8677 16.9125 17.8967 16.9125C17.4457 16.9125 16.9667 17.0625 16.5567 17.4455L9.8707 23.9805L3.1857 17.4455C2.7757 17.0485 2.2967 16.9125 1.8317 16.9125C0.8747 16.9125 -0.0003 17.6775 -0.0003 18.7575C-0.0003 19.3045 0.2597 19.7555 0.6287 20.1115L8.3807 27.5485C8.8457 27.9865 9.3107 28.2185 9.8707 28.2185Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.046875 25.375"
          className={className}
        >
          <path
            d="              M9.0237 -0.0004C8.8317 -0.0004 8.6677 0.0956 8.5177 0.2326L0.1917 8.3266C0.0547 8.4496 -0.0003 8.5996 -0.0003 8.7496C-0.0003 9.0506 0.2327 9.2696 0.5337 9.2696C0.6697 9.2696 0.8207 9.2286 0.9567 9.1056L9.0237 1.1896L17.1037 9.1056C17.2267 9.2286 17.3767 9.2696 17.5137 9.2696C17.8147 9.2696 18.0467 9.0506 18.0467 8.7496C18.0467 8.5996 17.9927 8.4496 17.8687 8.3266L9.5427 0.2326C9.3787 0.0956 9.2287 -0.0004 9.0237 -0.0004ZM9.0237 25.3746C9.2287 25.3746 9.3787 25.2796 9.5427 25.1426L17.8687 17.0486C17.9927 16.9126 18.0467 16.7756 18.0467 16.6246C18.0467 16.3246 17.8147 16.0916 17.5137 16.0916C17.3767 16.0916 17.2267 16.1466 17.1037 16.2696L9.0237 24.1716L0.9567 16.2696C0.8207 16.1466 0.6697 16.0916 0.5337 16.0916C0.2327 16.0916 -0.0003 16.3246 -0.0003 16.6246C-0.0003 16.7756 0.0547 16.9126 0.1917 17.0486L8.5177 25.1426C8.6677 25.2796 8.8317 25.3746 9.0237 25.3746Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.005859375 25.1015625"
          className={className}
        >
          <path
            d="              M8.9957 -0.0001C8.8457 -0.0001 8.7367 0.0819 8.6137 0.1779L0.1367 8.4489C0.0277 8.5589 -0.0003 8.6539 -0.0003 8.7359C-0.0003 8.9139 0.1507 9.0509 0.3277 9.0509C0.4097 9.0509 0.5197 9.0239 0.6017 8.9279L8.9957 0.7109L17.4047 8.9279C17.4867 9.0239 17.5957 9.0509 17.6777 9.0509C17.8557 9.0509 18.0057 8.9139 18.0057 8.7359C18.0057 8.6539 17.9787 8.5589 17.8687 8.4489L9.3927 0.1779C9.2697 0.0819 9.1597 -0.0001 8.9957 -0.0001ZM8.9957 25.1019C9.1597 25.1019 9.2697 25.0199 9.3927 24.9099L17.8687 16.6519C17.9787 16.5429 18.0057 16.4469 18.0057 16.3649C18.0057 16.1739 17.8557 16.0509 17.6777 16.0509C17.5957 16.0509 17.4867 16.0779 17.4047 16.1599L8.9957 24.3909L0.6017 16.1599C0.5197 16.0779 0.4097 16.0509 0.3277 16.0509C0.1507 16.0509 -0.0003 16.1739 -0.0003 16.3649C-0.0003 16.4469 0.0277 16.5429 0.1367 16.6519L8.6137 24.9099C8.7367 25.0199 8.8457 25.1019 8.9957 25.1019Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
