import { IconProps } from "../../types"

export default function ArrowDownRightCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM19.1137 10.3081C18.0877 10.3081 17.4587 11.0741 17.4587 12.2361V13.5901L17.6367 14.8481L16.3517 13.2751L12.7287 9.6661C12.2227 9.1871 11.7167 8.9961 11.1567 8.9961C10.0627 8.9961 9.1187 9.8031 9.1187 11.0061C9.1187 11.5391 9.3517 12.0991 9.7477 12.4961L13.4397 16.1871L15.0117 17.4731L13.8227 17.2541H12.3187C11.1697 17.2541 10.4177 17.8831 10.4177 18.9221C10.4177 19.9611 11.1837 20.5901 12.3597 20.5901H18.3337C19.8787 20.5901 20.7817 19.7011 20.7817 18.1701V12.2091C20.7817 11.0601 20.1527 10.3081 19.1137 10.3081Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM18.6617 10.4456C17.8417 10.4456 17.3357 11.0336 17.3357 11.9356V13.7946L17.5277 15.4906L15.9007 13.6586L11.5667 9.3376C11.2247 8.9956 10.8417 8.8456 10.4047 8.8456C9.5427 8.8456 8.8727 9.4476 8.8727 10.3496C8.8727 10.7596 9.0647 11.1696 9.3517 11.4566L13.7267 15.8316L15.5727 17.4586L13.9587 17.2406H11.9627C11.0607 17.2406 10.4867 17.7596 10.4867 18.5796C10.4867 19.4006 11.0737 19.9066 11.9767 19.9066H18.2107C19.3317 19.9066 20.0017 19.3046 20.0017 18.1426V11.9356C20.0017 11.0466 19.4827 10.4456 18.6617 10.4456Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM18.9077 10.3774C17.9647 10.3774 17.3907 11.0604 17.3907 12.0994V13.6994L17.5817 15.1624L16.1327 13.4664L12.1817 9.5154C11.7577 9.1054 11.3067 8.9274 10.8007 8.9274C9.8167 8.9274 8.9957 9.6384 8.9957 10.7054C8.9957 11.1834 9.2147 11.6624 9.5707 12.0174L13.5757 16.0234L15.2717 17.4724L13.8907 17.2544H12.1547C11.1157 17.2544 10.4457 17.8414 10.4457 18.7714C10.4457 19.7014 11.1287 20.2754 12.1817 20.2754H18.2797C19.6187 20.2754 20.4117 19.5234 20.4117 18.1704V12.0864C20.4117 11.0604 19.8377 10.3774 18.9077 10.3774Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM18.1427 10.391C17.6777 10.391 17.3637 10.705 17.3637 11.225V14.219L17.4997 16.475L15.7777 14.643L9.8707 8.736C9.7207 8.586 9.5297 8.49 9.2557 8.49C8.7907 8.49 8.4767 8.805 8.4767 9.283C8.4767 9.502 8.5857 9.707 8.7367 9.857L14.6427 15.764L16.4887 17.514L14.5197 17.363H11.2247C10.7187 17.363 10.3907 17.678 10.3907 18.156C10.3907 18.607 10.7047 18.922 11.1977 18.922H18.0607C18.5797 18.922 18.9217 18.662 18.9217 18.047V11.238C18.9217 10.732 18.6077 10.391 18.1427 10.391Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM18.3747 10.5141C17.6917 10.5141 17.2537 10.9921 17.2537 11.7301V13.9181L17.4587 15.8871L15.6137 13.8901L10.8277 9.1051C10.5817 8.8591 10.2817 8.7361 9.9117 8.7361C9.2147 8.7361 8.7227 9.2011 8.7227 9.9261C8.7227 10.2401 8.8727 10.5681 9.1057 10.7871L13.9047 15.5861L15.9277 17.4451L14.0547 17.2261H11.7437C11.0057 17.2261 10.5137 17.6781 10.5137 18.3481C10.5137 19.0311 10.9917 19.4691 11.7307 19.4691H18.1287C18.9767 19.4691 19.4957 19.0451 19.4957 18.1151V11.7581C19.4957 11.0191 19.0587 10.5141 18.3747 10.5141Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM18.2107 10.5544C17.6097 10.5544 17.2127 10.9644 17.2127 11.6214V13.9864L17.4177 16.1194L15.4487 14.0134L10.4177 8.9824C10.2127 8.7914 9.9667 8.6684 9.6387 8.6684C9.0367 8.6684 8.6267 9.0644 8.6267 9.6794C8.6267 9.9534 8.7637 10.2264 8.9547 10.4184L13.9997 15.4494L16.1327 17.4454L14.1097 17.2264H11.6207C10.9647 17.2264 10.5407 17.6234 10.5407 18.2244C10.5407 18.8264 10.9507 19.2224 11.5937 19.2224H18.0737C18.7717 19.2224 19.2227 18.9084 19.2227 18.1014V11.6484C19.2227 11.0054 18.8127 10.5544 18.2107 10.5544Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM18.4977 10.4859C17.7597 10.4859 17.2817 11.0059 17.2817 11.8259V13.8629L17.4867 15.7229L15.7367 13.7809L11.1427 9.2009C10.8557 8.9139 10.5277 8.7769 10.1167 8.7769C9.3657 8.7769 8.7907 9.3109 8.7907 10.1039C8.7907 10.4729 8.9547 10.8279 9.2147 11.0879L13.8227 15.6949L15.7777 17.4589L14.0137 17.2399H11.8397C11.0327 17.2399 10.4997 17.7049 10.4997 18.4569C10.4997 19.1949 11.0197 19.6599 11.8397 19.6599H18.1567C19.1267 19.6599 19.7147 19.1679 19.7147 18.1289V11.8259C19.7147 11.0329 19.2367 10.4859 18.4977 10.4859Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM18.0467 10.1722C17.7597 10.1722 17.5687 10.3772 17.5687 10.6912V14.5332L17.6097 16.9532L16.2007 15.4762L9.1467 8.4222C9.0507 8.3262 8.9277 8.2582 8.7497 8.2582C8.4627 8.2582 8.2717 8.4632 8.2717 8.7502C8.2717 8.9002 8.3397 9.0372 8.4357 9.1332L15.4907 16.1872L16.9807 17.6232L15.0667 17.5682H10.7047C10.3767 17.5682 10.1857 17.7602 10.1857 18.0602C10.1857 18.3342 10.3767 18.5122 10.6917 18.5122H18.0197C18.3207 18.5122 18.5257 18.3342 18.5257 18.0062V10.6912C18.5257 10.3772 18.3337 10.1722 18.0467 10.1722Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM18.0057 10.0621C17.8007 10.0621 17.6637 10.1851 17.6637 10.4041V17.1851L16.4197 15.9001L8.7777 8.2581C8.7227 8.1891 8.6267 8.1351 8.4907 8.1351C8.2987 8.1351 8.1617 8.2711 8.1617 8.4761C8.1617 8.5861 8.2027 8.6811 8.2717 8.7501L15.9277 16.4061L17.2267 17.6641H10.4317C10.2127 17.6641 10.0757 17.8011 10.0757 18.0061C10.0757 18.1831 10.2127 18.3061 10.4317 18.3061H18.0057C18.1977 18.3061 18.3207 18.1701 18.3207 17.9651V10.4041C18.3207 10.1851 18.1837 10.0621 18.0057 10.0621Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}