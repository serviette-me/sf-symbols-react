import { IconProps } from "../../types"

export default function HumidityFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.92942326921004 25.375"
          className={className}
        >
          <path
            d="              M6.3613 9.0513C12.9513 9.0513 16.1363 3.8963 21.5373 3.8963C22.7813 3.8963 23.7923 4.1703 25.0233 4.8943C25.9253 5.3863 26.9643 5.1543 27.5523 4.3343C28.2363 3.3493 27.9083 2.0643 26.7873 1.4083C25.1603 0.4783 23.3963 0.0003 21.5373 0.0003C14.9473 0.0003 11.7613 5.1683 6.3613 5.1683C5.1173 5.1683 4.1053 4.8813 2.8743 4.1563C1.9583 3.6503 0.9063 3.9103 0.3453 4.7583C-0.3247 5.7423 0.0033 7.0003 1.1243 7.6563C2.7383 8.5723 4.5013 9.0513 6.3613 9.0513ZM24.3533 25.3753C28.0033 25.3753 30.9293 22.5043 30.9293 18.9223C30.9293 16.9803 29.9723 15.0933 29.2203 13.6723L26.1853 8.0113C25.7883 7.2733 25.1323 6.9043 24.3533 6.9043C23.5603 6.9043 22.9173 7.2873 22.5213 8.0253L19.4863 13.6723C18.7343 15.0933 17.7773 16.9803 17.7773 18.9223C17.7773 22.5043 20.7033 25.3753 24.3533 25.3753ZM6.3743 16.3923C11.1193 16.3923 14.3453 13.4533 17.8043 12.0453C18.6383 10.4863 19.4723 8.9413 20.3063 7.3963C14.4823 8.0113 11.5153 12.4963 6.3743 12.4963C5.1303 12.4963 4.1323 12.2093 2.8883 11.4843C1.9723 10.9783 0.9193 11.2383 0.3723 12.0863C-0.2967 13.0703 0.0173 14.3283 1.1383 14.9843C2.7513 15.9003 4.5153 16.3923 6.3743 16.3923ZM6.3613 23.7203C10.2033 23.7203 12.9513 21.8473 15.6583 20.3983C15.4123 18.9083 15.5353 17.4593 15.9993 15.9683C12.6093 17.5413 10.0383 19.8243 6.3613 19.8243C5.1173 19.8243 4.1053 19.5373 2.8743 18.8123C1.9583 18.3063 0.9063 18.5663 0.3453 19.4143C-0.3247 20.3983 0.0033 21.6563 1.1243 22.3123C2.7383 23.2283 4.5013 23.7203 6.3613 23.7203Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.163448097676355 24.63671875"
          className={className}
        >
          <path
            d="              M5.951 8.2031C12.294 8.2031 15.535 3.0491 21.099 3.0491C22.398 3.0491 23.492 3.3361 24.804 4.1011C25.556 4.5121 26.335 4.2791 26.773 3.6641C27.292 2.9261 27.115 1.9141 26.158 1.3531C24.585 0.4511 22.904 0.0001 21.099 0.0001C14.701 0.0001 11.474 5.1681 5.951 5.1681C4.665 5.1681 3.558 4.8671 2.246 4.1151C1.494 3.6911 0.687 3.9371 0.277 4.5661C-0.229 5.3051 -0.051 6.3031 0.892 6.8491C2.464 7.7521 4.146 8.2031 5.951 8.2031ZM23.929 24.6371C27.402 24.6371 30.163 21.9161 30.163 18.5251C30.163 16.6661 29.247 14.8341 28.482 13.4121L25.406 7.6831C25.091 7.0681 24.572 6.7671 23.929 6.7671C23.273 6.7671 22.767 7.0821 22.439 7.6831L19.376 13.4121C18.611 14.8341 17.695 16.6661 17.695 18.5251C17.695 21.9161 20.47 24.6371 23.929 24.6371ZM5.978 15.5451C11.05 15.5451 14.277 12.0041 18.378 10.8831C19.007 9.7071 19.65 8.5451 20.265 7.3691C14.318 7.8201 11.296 12.4961 5.978 12.4961C4.679 12.4961 3.572 12.1951 2.259 11.4431C1.507 11.0191 0.714 11.2661 0.29 11.8941C-0.202 12.6331 -0.024 13.6311 0.906 14.1781C2.492 15.0801 4.173 15.5451 5.978 15.5451ZM5.951 22.8731C9.943 22.8731 12.746 20.7261 15.726 19.2501C15.562 18.2111 15.712 16.9391 16.068 15.7911C12.554 17.3081 9.847 19.8241 5.951 19.8241C4.665 19.8241 3.558 19.5231 2.246 18.7711C1.494 18.3481 0.687 18.5941 0.277 19.2231C-0.229 19.9611 -0.051 20.9591 0.892 21.5061C2.464 22.4081 4.146 22.8731 5.951 22.8731Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.554818158811717 25.01953125"
          className={className}
        >
          <path
            d="              M6.1638 8.6539C12.6448 8.6539 15.8438 3.4999 21.3258 3.4999C22.5978 3.4999 23.6508 3.7739 24.9218 4.5259C25.7418 4.9769 26.6578 4.7439 27.1778 4.0199C27.7798 3.1449 27.5328 1.9959 26.4808 1.3809C24.8808 0.4649 23.1578 -0.0001 21.3258 -0.0001C14.8188 -0.0001 11.6188 5.1679 6.1638 5.1679C4.8928 5.1679 3.8398 4.8809 2.5688 4.1429C1.7348 3.6639 0.8048 3.9239 0.3128 4.6619C-0.2752 5.5369 -0.0292 6.6719 1.0098 7.2739C2.6098 8.1899 4.3318 8.6539 6.1638 8.6539ZM24.1428 25.0199C27.7108 25.0199 30.5548 22.2309 30.5548 18.7309C30.5548 16.8299 29.6248 14.9709 28.8598 13.5489L25.8108 7.8609C25.4548 7.1779 24.8538 6.8499 24.1428 6.8499C23.4178 6.8499 22.8438 7.1919 22.4748 7.8609L19.4258 13.5489C18.6598 14.9709 17.7308 16.8299 17.7308 18.7309C17.7308 22.2309 20.5878 25.0199 24.1428 25.0199ZM6.1778 15.9829C11.0728 15.9829 14.3128 12.7699 18.0728 11.4979C18.7968 10.1309 19.5488 8.7499 20.2868 7.3829C14.3948 7.9299 11.4008 12.4959 6.1778 12.4959C4.9198 12.4959 3.8668 12.2089 2.5958 11.4709C1.7478 11.0059 0.8188 11.2519 0.3258 11.9899C-0.2612 12.8649 -0.0022 13.9999 1.0238 14.6019C2.6228 15.5179 4.3458 15.9829 6.1778 15.9829ZM6.1638 23.3239C10.0748 23.3239 12.8498 21.3149 15.6798 19.8519C15.4748 18.5799 15.6118 17.2129 16.0348 15.8869C12.5758 17.4319 9.9378 19.8239 6.1638 19.8239C4.8928 19.8239 3.8398 19.5369 2.5688 18.7989C1.7348 18.3339 0.8048 18.5799 0.3128 19.3179C-0.2752 20.1929 -0.0292 21.3279 1.0098 21.9299C2.6098 22.8459 4.3318 23.3239 6.1638 23.3239Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.091200463619398 23.625"
          className={className}
        >
          <path
            d="              M5.3431 6.8492C11.2361 6.8492 14.6541 1.6812 20.3551 1.6812C21.8181 1.6812 23.0621 2.0102 24.4431 2.8162C24.9071 3.0622 25.3311 2.8982 25.5501 2.5842C25.8101 2.2012 25.7821 1.6402 25.2081 1.2992C23.6501 0.4102 22.1181 0.0002 20.3551 0.0002C14.2021 0.0002 10.8661 5.1542 5.3431 5.1542C3.8801 5.1542 2.6361 4.8262 1.2551 4.0332C0.7901 3.7732 0.3661 3.9512 0.1481 4.2792C-0.0979 4.6482 -0.0709 5.2222 0.4901 5.5372C2.0341 6.4392 3.5791 6.8492 5.3431 6.8492ZM23.2531 23.6252C26.5071 23.6252 29.0911 21.0962 29.0911 17.9242C29.0911 16.1462 28.2161 14.3832 27.4231 12.9202L24.2651 7.0272C24.0321 6.5902 23.6911 6.3852 23.2531 6.3852C22.8021 6.3852 22.4601 6.5902 22.2281 7.0272L19.0701 12.9202C18.2771 14.3832 17.4021 16.1462 17.4021 17.9242C17.4021 21.0962 19.9991 23.6252 23.2531 23.6252ZM5.3571 14.1782C10.8391 14.1782 14.1751 9.6932 19.2611 9.1462C19.5751 8.5452 19.9041 7.9432 20.2321 7.3422C13.8201 7.5332 10.8801 12.4962 5.3571 12.4962C3.8941 12.4962 2.6501 12.1542 1.2691 11.3612C0.8041 11.1152 0.3801 11.2792 0.1611 11.6072C-0.0849 11.9762 -0.0569 12.5512 0.5031 12.8652C2.0621 13.7672 3.5931 14.1782 5.3571 14.1782ZM5.3431 21.5062C9.5271 21.5062 12.4931 18.8672 15.9111 17.4042C15.8841 16.9122 16.0211 16.1052 16.2121 15.4762C12.3981 16.8852 9.4861 19.8242 5.3431 19.8242C3.8801 19.8242 2.6361 19.4962 1.2551 18.6892C0.7901 18.4432 0.3661 18.6072 0.1481 18.9352C-0.0979 19.3042 -0.0709 19.8792 0.4901 20.2072C2.0341 21.0962 3.5791 21.5062 5.3431 21.5062Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.68305331852778 24.158203125"
          className={className}
        >
          <path
            d="              M5.6891 7.6703C11.8691 7.6703 15.1501 2.5023 20.8101 2.5023C22.1361 2.5023 23.2981 2.8023 24.6651 3.5823C25.3081 3.9513 25.9371 3.7183 26.2791 3.2403C26.6891 2.6663 26.5931 1.8183 25.7731 1.3263C24.2141 0.4373 22.5871 0.0003 20.8101 0.0003C14.5481 0.0003 11.2941 5.1683 5.6891 5.1683C4.3631 5.1683 3.2011 4.8673 1.8471 4.0743C1.1911 3.7183 0.5481 3.9513 0.2201 4.4433C-0.1629 5.0313 -0.0809 5.8653 0.7401 6.3303C2.2981 7.2323 3.9251 7.6703 5.6891 7.6703ZM23.6541 24.1583C27.0031 24.1583 29.6831 21.5473 29.6831 18.2653C29.6831 16.4613 28.7811 14.6833 28.0011 13.2343L24.9111 7.4783C24.6381 6.9453 24.2011 6.6993 23.6541 6.6993C23.1071 6.6993 22.6691 6.9453 22.3821 7.4783L19.3061 13.2343C18.5271 14.6833 17.6381 16.4613 17.6381 18.2653C17.6381 21.5473 20.3041 24.1583 23.6541 24.1583ZM5.7161 14.9983C11.0071 14.9983 14.2341 11.0743 18.7451 10.1443C19.2381 9.2143 19.7441 8.2853 20.2491 7.3553C14.2201 7.6973 11.1711 12.4963 5.7161 12.4963C4.3761 12.4963 3.2281 12.1953 1.8611 11.4163C1.2181 11.0473 0.5761 11.2793 0.2471 11.7713C-0.1489 12.3593 -0.0669 13.1933 0.7531 13.6583C2.3121 14.5603 3.9391 14.9983 5.7161 14.9983ZM5.6891 22.3263C9.7771 22.3263 12.6201 20.0023 15.7651 18.5113C15.6691 17.7593 15.8201 16.6113 16.1201 15.6813C12.5111 17.1583 9.7221 19.8243 5.6891 19.8243C4.3631 19.8243 3.2011 19.5233 1.8471 18.7443C1.1911 18.3753 0.5481 18.6073 0.2201 19.1133C-0.1629 19.6873 -0.0809 20.5213 0.7401 21.0003C2.2981 21.8883 3.9251 22.3263 5.6891 22.3263Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.406201880767068 23.884765625"
          className={className}
        >
          <path
            d="              M5.5487 7.356C11.6327 7.356 14.9277 2.201 20.6567 2.201C21.9957 2.201 23.1857 2.502 24.5797 3.295C25.1677 3.623 25.7147 3.404 26.0017 2.994C26.3437 2.502 26.3027 1.764 25.5367 1.313C23.9917 0.424 22.4067 0 20.6567 0C14.4497 0 11.1817 5.154 5.5487 5.154C4.1957 5.154 3.0057 4.854 1.6117 4.061C1.0237 3.732 0.4767 3.951 0.1897 4.375C-0.1253 4.867 -0.0973 5.606 0.6547 6.043C2.1997 6.932 3.7847 7.356 5.5487 7.356ZM23.4997 23.885C26.7817 23.885 29.4067 21.328 29.4067 18.115C29.4067 16.338 28.5177 14.588 27.7387 13.139L24.6347 7.356C24.3747 6.863 23.9917 6.645 23.4997 6.645C22.9937 6.645 22.6117 6.863 22.3517 7.356L19.2617 13.139C18.4827 14.588 17.6077 16.338 17.6077 18.115C17.6077 21.328 20.2187 23.885 23.4997 23.885ZM5.5627 14.697C10.9767 14.697 14.2027 10.555 18.9477 9.734C19.3707 8.928 19.8087 8.148 20.2327 7.342C14.1617 7.629 11.0857 12.496 5.5627 12.496C4.2087 12.496 3.0197 12.182 1.6247 11.389C1.0507 11.061 0.4907 11.279 0.2167 11.703C-0.1113 12.195 -0.0843 12.934 0.6677 13.371C2.2127 14.26 3.8127 14.697 5.5627 14.697ZM5.5487 22.025C9.6777 22.025 12.5487 19.592 15.7887 18.102C15.7207 17.5 15.8847 16.42 16.1307 15.613C12.4937 17.076 9.6507 19.824 5.5487 19.824C4.1957 19.824 3.0057 19.523 1.6117 18.717C1.0237 18.389 0.4767 18.607 0.1897 19.031C-0.1253 19.523 -0.0973 20.275 0.6547 20.699C2.1997 21.602 3.7847 22.025 5.5487 22.025Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.886352721808766 24.36328125"
          className={className}
        >
          <path
            d="              M5.7963 7.9027C12.0443 7.9027 15.3123 2.7347 20.9313 2.7347C22.2433 2.7347 23.3783 3.0347 24.7183 3.8007C25.4023 4.1837 26.1133 3.9647 26.4953 3.4177C26.9473 2.7757 26.8243 1.8597 25.9353 1.3397C24.3633 0.4377 22.7223 -0.0003 20.9313 -0.0003C14.6153 -0.0003 11.3743 5.1547 5.7963 5.1547C4.4843 5.1547 3.3493 4.8667 2.0093 4.0877C1.3263 3.7047 0.6153 3.9377 0.2453 4.4977C-0.1917 5.1407 -0.0687 6.0567 0.8063 6.5487C2.3653 7.4507 4.0193 7.9027 5.7963 7.9027ZM23.7753 24.3637C27.1793 24.3637 29.8863 21.6977 29.8863 18.3747C29.8863 16.5427 28.9843 14.7387 28.2043 13.3027L25.1283 7.5607C24.8273 6.9997 24.3633 6.7267 23.7753 6.7267C23.1733 6.7267 22.7083 6.9997 22.4083 7.5607L19.3313 13.3027C18.5523 14.7387 17.6633 16.5427 17.6633 18.3747C17.6633 21.6977 20.3703 24.3637 23.7753 24.3637ZM5.8243 15.2307C11.0193 15.2307 14.2593 11.4707 18.5793 10.4587C19.1403 9.4197 19.7013 8.3947 20.2473 7.3557C14.2593 7.7517 11.2243 12.4827 5.8243 12.4827C4.5113 12.4827 3.3763 12.1957 2.0233 11.4157C1.3393 11.0327 0.6283 11.2657 0.2593 11.8257C-0.1777 12.4687 -0.0547 13.3847 0.8203 13.8767C2.3783 14.7797 4.0333 15.2307 5.8243 15.2307ZM5.7963 22.5587C9.8433 22.5587 12.6733 20.3167 15.7493 18.8257C15.6133 17.9507 15.7773 16.7477 16.0913 15.7227C12.5233 17.2127 9.7753 19.8237 5.7963 19.8237C4.4843 19.8237 3.3493 19.5237 2.0093 18.7437C1.3263 18.3617 0.6153 18.5937 0.2453 19.1547C-0.1917 19.7967 -0.0687 20.7127 0.8063 21.2187C2.3653 22.1207 4.0193 22.5587 5.7963 22.5587Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.694556918242398 23.296875"
          className={className}
        >
          <path
            d="              M5.07 6.1794C10.73 6.1794 14.298 1.0114 19.958 1.0114C21.572 1.0114 22.884 1.3804 24.265 2.1734C24.566 2.3374 24.812 2.2284 24.949 2.0374C25.099 1.8044 25.085 1.4764 24.771 1.2984C23.199 0.3964 21.736 0.0004 19.958 0.0004C13.861 0.0004 10.443 5.1684 5.07 5.1684C3.47 5.1684 2.157 4.7984 0.777 4.0054C0.476 3.8414 0.216 3.9374 0.093 4.1424C-0.057 4.3754 -0.044 4.7034 0.271 4.8804C1.829 5.7834 3.292 6.1794 5.07 6.1794ZM22.925 23.2964C26.138 23.2964 28.695 20.7954 28.695 17.6644C28.695 15.9004 27.82 14.1364 27.013 12.6324L23.786 6.6034C23.568 6.2074 23.294 6.0564 22.925 6.0564C22.542 6.0564 22.269 6.2074 22.064 6.5894L18.824 12.6324C18.017 14.1364 17.142 15.9004 17.142 17.6644C17.142 20.7954 19.712 23.2964 22.925 23.2964ZM5.097 13.5074C10.634 13.5074 14.12 8.5584 19.671 8.3804C19.863 8.0394 20.054 7.6974 20.232 7.3414C13.382 7.4104 10.607 12.4964 5.097 12.4964C3.484 12.4964 2.171 12.1274 0.79 11.3344C0.49 11.1704 0.23 11.2794 0.107 11.4704C-0.044 11.7034 -0.03 12.0314 0.284 12.2094C1.857 13.1114 3.32 13.5074 5.097 13.5074ZM5.07 20.8364C9.322 20.8364 12.398 17.9104 16.075 16.4884C16.103 16.1324 16.185 15.6954 16.308 15.2984C12.275 16.6524 9.267 19.8244 5.07 19.8244C3.47 19.8244 2.157 19.4554 0.777 18.6624C0.476 18.4984 0.216 18.6074 0.093 18.7984C-0.057 19.0314 -0.044 19.3594 0.271 19.5374C1.829 20.4394 3.292 20.8364 5.07 20.8364Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.49550983424201 23.119140625"
          className={className}
        >
          <path
            d="              M4.939 5.8247C10.476 5.8247 14.113 0.6697 19.773 0.6697C21.455 0.6697 22.794 1.0527 24.175 1.8317C24.394 1.9547 24.558 1.8867 24.654 1.7497C24.749 1.5997 24.736 1.3807 24.544 1.2847C22.972 0.3827 21.55 -0.0003 19.773 -0.0003C13.703 -0.0003 10.216 5.1547 4.939 5.1547C3.257 5.1547 1.917 4.7717 0.537 3.9927C0.318 3.8687 0.154 3.9377 0.058 4.0747C-0.038 4.2247 -0.024 4.4437 0.167 4.5387C1.74 5.4417 3.162 5.8247 4.939 5.8247ZM22.753 23.1187C25.953 23.1187 28.496 20.6447 28.496 17.5277C28.496 15.7637 27.621 13.9997 26.8 12.4827L23.533 6.3847C23.341 6.0157 23.109 5.8787 22.753 5.8787C22.412 5.8787 22.165 6.0157 21.974 6.3577L18.706 12.4827C17.886 13.9997 17.025 15.7637 17.025 17.5277C17.025 20.6447 19.568 23.1187 22.753 23.1187ZM4.966 13.1657C10.544 13.1657 14.099 7.9707 19.896 7.9847C20.005 7.7797 20.128 7.5607 20.238 7.3417C13.156 7.3417 10.476 12.4957 4.966 12.4957C3.285 12.4957 1.931 12.0997 0.55 11.3207C0.331 11.1977 0.167 11.2657 0.085 11.4027C-0.024 11.5527 0.003 11.7717 0.181 11.8677C1.753 12.7837 3.175 13.1657 4.966 13.1657ZM4.939 20.4937C9.218 20.4937 12.363 17.4177 16.163 16.0097C16.218 15.7367 16.287 15.4767 16.369 15.2027C12.226 16.5297 9.163 19.8247 4.939 19.8247C3.257 19.8247 1.917 19.4277 0.537 18.6487C0.318 18.5257 0.154 18.5937 0.058 18.7307C-0.038 18.8807 -0.024 19.0997 0.167 19.1957C1.74 20.1117 3.162 20.4937 4.939 20.4937Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
