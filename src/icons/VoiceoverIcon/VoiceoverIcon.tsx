import { IconProps } from "../../types"

export default function VoiceoverIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.384765625 29.859375"
          className={className}
        >
          <path
            d="              M19.4418 29.8591C27.6718 29.8591 34.3848 23.1601 34.3848 14.9301C34.3848 6.6991 27.6718 0.0001 19.4418 0.0001C11.9218 0.0001 5.6878 5.6051 4.6488 12.8381C6.2478 12.3321 7.9848 12.2771 9.6388 12.6741C10.6638 8.1891 14.6558 4.8671 19.4418 4.8671C25.0058 4.8671 29.5038 9.3651 29.5038 14.9301C29.5178 20.4941 25.0058 24.9921 19.4418 24.9921C18.5118 24.9921 17.6228 24.8831 16.7758 24.6371C16.3238 26.2771 15.4358 27.7671 14.2458 28.9301C15.8728 29.5311 17.6228 29.8591 19.4418 29.8591ZM19.4418 9.8981C20.3438 9.8981 21.0548 9.1601 21.0548 8.2851C21.0548 7.3961 20.3438 6.6721 19.4418 6.6721C18.5388 6.6721 17.8278 7.3961 17.8278 8.2851C17.8278 9.1601 18.5388 9.8981 19.4418 9.8981ZM19.4418 10.7191C17.6778 10.7191 15.1618 10.4321 13.9728 10.2401C13.8638 10.2131 13.7398 10.1991 13.6308 10.1991C13.3168 10.1991 13.0018 10.4451 13.0018 10.8961C13.0018 11.2381 13.1938 11.5121 13.5348 11.6071C13.9178 11.7171 16.7478 12.0451 17.1038 12.1131C17.4588 12.1821 17.6638 12.4821 17.6778 12.9061C17.7188 13.5621 17.6778 15.6131 17.5278 16.5571C17.3638 17.4861 16.2968 21.9841 16.2418 22.1761C16.1188 22.6541 16.3928 23.0781 16.8848 23.0781C17.2398 23.0781 17.4728 22.8871 17.5958 22.4351C17.8418 21.5191 18.5938 18.4161 18.8398 17.6641C19.0178 17.1171 19.1408 16.9261 19.4418 16.9261C19.7418 16.9261 19.8788 17.1171 20.0568 17.6641C20.3028 18.4021 21.0818 21.5191 21.2868 22.4351C21.3968 22.8871 21.6428 23.0781 21.9978 23.0781C22.4898 23.0781 22.7638 22.6541 22.6408 22.1761C22.5998 21.9841 21.5058 17.4861 21.3558 16.5571C21.2188 15.6131 21.2188 13.5621 21.2188 12.9061C21.2188 12.4821 21.4238 12.1821 21.7798 12.1131C22.1348 12.0451 24.9648 11.7301 25.3618 11.6071C25.6898 11.4981 25.8808 11.2381 25.8808 10.8961C25.8808 10.4451 25.5528 10.1991 25.2518 10.1991C25.1428 10.1991 25.0198 10.2131 24.9098 10.2401C23.7208 10.4321 21.2188 10.7191 19.4418 10.7191ZM7.4508 29.5581C11.5258 29.5581 14.9028 26.1541 14.9028 22.0941C14.9028 18.0191 11.5388 14.6561 7.4508 14.6561C3.3638 14.6561 -0.0002 18.0191 -0.0002 22.0941C-0.0002 26.1541 3.3638 29.5581 7.4508 29.5581ZM2.7208 22.7091V21.5061C2.7208 20.8221 3.0758 20.4391 3.7458 20.4391H4.5118C4.6078 20.4391 4.6618 20.4121 4.7308 20.3441L6.0428 19.1681C6.2758 18.9491 6.4668 18.8531 6.7128 18.8531C7.0958 18.8531 7.4098 19.1411 7.4098 19.5371V24.6501C7.4098 25.0601 7.0958 25.3481 6.7128 25.3481C6.4668 25.3481 6.2478 25.2521 6.0018 25.0471L4.7308 23.8711C4.6618 23.8031 4.6078 23.7621 4.5118 23.7621H3.7458C3.0758 23.7621 2.7208 23.3921 2.7208 22.7091ZM10.4048 24.9241C10.0758 24.7601 10.0488 24.3631 10.2678 24.0081C10.5688 23.4471 10.7598 22.8051 10.7598 22.1211C10.7598 21.4241 10.5688 20.7671 10.2678 20.2211C10.0488 19.8791 10.0758 19.4821 10.4048 19.2911C10.6918 19.1411 11.0328 19.2091 11.2108 19.4821C11.6898 20.2621 11.9358 21.1501 11.9358 22.1211C11.9358 23.0781 11.6898 23.9801 11.2108 24.7461C11.0328 25.0061 10.6918 25.0881 10.4048 24.9241ZM8.5998 23.9121C8.3128 23.7341 8.2438 23.3921 8.4898 22.9551C8.6408 22.7091 8.7088 22.4081 8.7088 22.1071C8.7088 21.7791 8.6408 21.4781 8.4898 21.2321C8.2438 20.8221 8.3128 20.4531 8.5998 20.2891C8.8728 20.1251 9.2008 20.1931 9.3648 20.4261C9.6938 20.9041 9.8988 21.4781 9.8988 22.1071C9.8988 22.7091 9.6938 23.2971 9.3648 23.7621C9.2008 23.9941 8.8728 24.0761 8.5998 23.9121Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.728515625 28.888671875"
          className={className}
        >
          <path
            d="              M19.2776 28.8886C27.2066 28.8886 33.7286 22.3676 33.7286 14.4376C33.7286 6.5216 27.1936 -0.0004 19.2776 -0.0004C11.9626 -0.0004 5.8516 5.5506 4.9626 12.6326C6.0976 12.3186 7.4516 12.2636 8.6406 12.5096C9.5296 7.4376 13.9316 3.5956 19.2776 3.5956C25.2796 3.5956 30.1196 8.4356 30.1326 14.4376C30.1326 20.4536 25.2926 25.2926 19.2776 25.2926C18.0746 25.2926 16.9256 25.0876 15.8456 24.7186C15.4626 25.8946 14.8066 26.9746 13.9586 27.8496C15.6136 28.5196 17.4046 28.8886 19.2776 28.8886ZM19.2776 9.1736C20.2206 9.1736 20.9726 8.3946 20.9726 7.4786C20.9726 6.5356 20.2206 5.7836 19.2776 5.7836C18.3336 5.7836 17.5816 6.5356 17.5816 7.4786C17.5816 8.3946 18.3336 9.1736 19.2776 9.1736ZM19.2776 10.0356C17.4316 10.0356 14.7796 9.7206 13.5216 9.5296C13.4126 9.5016 13.2886 9.4746 13.1796 9.4746C12.8376 9.4746 12.5096 9.7476 12.5096 10.2266C12.5096 10.5686 12.7146 10.8696 13.0566 10.9646C13.4806 11.0746 16.4476 11.4296 16.8166 11.4976C17.1856 11.5796 17.4046 11.8806 17.4316 12.3316C17.4456 13.0156 17.4316 15.1756 17.2536 16.1606C17.1036 17.1446 15.9686 21.8616 15.9136 22.0666C15.7776 22.5726 16.0786 23.0236 16.5836 23.0236C16.9536 23.0236 17.2126 22.8186 17.3356 22.3266C17.5816 21.3696 18.3886 18.1156 18.6486 17.3226C18.8266 16.7476 18.9626 16.5426 19.2776 16.5426C19.5916 16.5426 19.7286 16.7476 19.9196 17.3226C20.1526 18.1016 20.9866 21.3696 21.2056 22.3266C21.3286 22.8186 21.5876 23.0236 21.9566 23.0236C22.4626 23.0236 22.7636 22.5726 22.6406 22.0666C22.5856 21.8616 21.4376 17.1446 21.2876 16.1606C21.1366 15.1756 21.1366 13.0156 21.1366 12.3316C21.1366 11.8806 21.3556 11.5796 21.7246 11.4976C22.0936 11.4296 25.0746 11.0876 25.4846 10.9646C25.8266 10.8556 26.0446 10.5686 26.0446 10.2266C26.0446 9.7476 25.6896 9.4746 25.3746 9.4746C25.2516 9.4746 25.1286 9.5016 25.0196 9.5296C23.7616 9.7206 21.1366 10.0356 19.2776 10.0356ZM7.1916 28.8066C11.1156 28.8066 14.3966 25.5256 14.3966 21.6016C14.3966 17.6636 11.1426 14.4106 7.1916 14.4106C3.2536 14.4106 -0.0004 17.6636 -0.0004 21.6016C-0.0004 25.5386 3.2536 28.8066 7.1916 28.8066ZM2.8306 22.2446V20.9726C2.8306 20.3576 3.1306 20.0426 3.7186 20.0426H4.6076C4.6756 20.0426 4.7306 20.0296 4.7716 19.9746L6.1936 18.6486C6.3986 18.4706 6.5626 18.3886 6.7676 18.3886C7.0816 18.3886 7.3286 18.6206 7.3286 18.9356V24.2676C7.3286 24.5816 7.0816 24.8146 6.7676 24.8146C6.5626 24.8146 6.3846 24.7326 6.1796 24.5546L4.7716 23.2286C4.7306 23.1876 4.6756 23.1606 4.6076 23.1606H3.7186C3.1306 23.1606 2.8306 22.8456 2.8306 22.2446ZM10.1176 24.3086C9.8576 24.1446 9.8306 23.8166 10.0076 23.5426C10.3356 22.9956 10.5406 22.3266 10.5406 21.6156C10.5406 20.8906 10.3356 20.2206 10.0076 19.6736C9.8166 19.4006 9.8576 19.0726 10.1176 18.9086C10.3636 18.7716 10.6506 18.8126 10.8146 19.0586C11.3066 19.7696 11.5526 20.6586 11.5526 21.6156C11.5526 22.5446 11.3066 23.4476 10.8146 24.1586C10.6506 24.3906 10.3496 24.4586 10.1176 24.3086ZM8.5176 23.3246C8.2716 23.1606 8.2166 22.8596 8.4216 22.5316C8.5856 22.2856 8.6676 21.9566 8.6676 21.6016C8.6676 21.2456 8.5856 20.9046 8.4216 20.6586C8.2166 20.3576 8.2716 20.0156 8.5176 19.8656C8.7636 19.7286 9.0506 19.7836 9.2016 20.0016C9.5156 20.4396 9.6936 21.0136 9.6936 21.6016C9.6936 22.1896 9.5016 22.7636 9.1876 23.2016C9.0376 23.4196 8.7496 23.4746 8.5176 23.3246Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.0703125 29.408203125"
          className={className}
        >
          <path
            d="              M19.3728 29.4084C27.4528 29.4084 34.0698 22.7914 34.0698 14.7114C34.0698 6.6304 27.4528 0.0004 19.3728 0.0004C11.9488 0.0004 5.7698 5.5914 4.7988 12.7554C6.1798 12.3324 7.7248 12.2774 9.1598 12.6054C10.1308 7.8344 14.3148 4.2794 19.3728 4.2794C25.1428 4.2794 29.8048 8.9274 29.8048 14.7114C29.8048 20.4804 25.1428 25.1424 19.3728 25.1424C18.3068 25.1424 17.2948 24.9924 16.3378 24.6774C15.9138 26.0994 15.1488 27.3984 14.1098 28.4234C15.7498 29.0524 17.5278 29.4084 19.3728 29.4084ZM19.3598 9.5704C20.2888 9.5704 21.0278 8.8044 21.0278 7.9024C21.0278 7.0004 20.2888 6.2614 19.3598 6.2614C18.4438 6.2614 17.7048 7.0004 17.7048 7.9024C17.7048 8.8044 18.4438 9.5704 19.3598 9.5704ZM19.3598 10.4044C17.5688 10.4044 14.9848 10.1034 13.7678 9.9124C13.6578 9.8844 13.5348 9.8714 13.4258 9.8714C13.0978 9.8714 12.7698 10.1174 12.7698 10.5824C12.7698 10.9234 12.9748 11.2244 13.3168 11.3064C13.7128 11.4164 16.6108 11.7574 16.9668 11.8264C17.3358 11.9084 17.5408 12.2094 17.5688 12.6464C17.5958 13.3024 17.5688 15.4224 17.4038 16.3794C17.2398 17.3224 16.1468 21.9294 16.0918 22.1344C15.9548 22.6274 16.2558 23.0644 16.7478 23.0644C17.1168 23.0644 17.3498 22.8594 17.4728 22.3944C17.7188 21.4514 18.4978 18.2794 18.7578 17.5134C18.9218 16.9534 19.0588 16.7484 19.3598 16.7484C19.6738 16.7484 19.8108 16.9534 19.9878 17.5134C20.2348 18.2654 21.0408 21.4514 21.2598 22.3944C21.3688 22.8594 21.6148 23.0644 21.9848 23.0644C22.4768 23.0644 22.7778 22.6274 22.6408 22.1344C22.5998 21.9294 21.4788 17.3224 21.3278 16.3794C21.1778 15.4224 21.1778 13.3024 21.1778 12.6464C21.1778 12.2094 21.3968 11.9084 21.7658 11.8264C22.1208 11.7574 25.0198 11.4294 25.4158 11.3064C25.7578 11.2114 25.9628 10.9234 25.9628 10.5824C25.9628 10.1174 25.6208 9.8714 25.3068 9.8714C25.1968 9.8714 25.0738 9.8844 24.9648 9.9124C23.7478 10.1034 21.1778 10.4044 19.3598 10.4044ZM7.3278 29.2034C11.3338 29.2034 14.6698 25.8674 14.6698 21.8614C14.6698 17.8554 11.3478 14.5474 7.3278 14.5474C3.3218 14.5474 -0.0002 17.8554 -0.0002 21.8614C-0.0002 25.8674 3.3218 29.2034 7.3278 29.2034ZM2.7758 22.4904V21.2594C2.7758 20.6034 3.1038 20.2614 3.7328 20.2614H4.5668C4.6488 20.2614 4.6898 20.2344 4.7578 20.1794L6.1108 18.9354C6.3438 18.7304 6.5218 18.6484 6.7398 18.6484C7.0958 18.6484 7.3688 18.9084 7.3688 19.2634V24.4724C7.3688 24.8414 7.0958 25.1014 6.7398 25.1014C6.5218 25.1014 6.3168 25.0064 6.0838 24.8144L4.7578 23.5704C4.6898 23.5154 4.6488 23.4884 4.5668 23.4884H3.7328C3.1038 23.4884 2.7758 23.1464 2.7758 22.4904ZM10.2678 24.6364C9.9808 24.4724 9.9398 24.1174 10.1448 23.8024C10.4588 23.2424 10.6638 22.5864 10.6638 21.8884C10.6638 21.1774 10.4588 20.5214 10.1448 19.9614C9.9398 19.6604 9.9808 19.2914 10.2678 19.1134C10.5408 18.9764 10.8558 19.0314 11.0198 19.2914C11.5118 20.0294 11.7578 20.9184 11.7578 21.8884C11.7578 22.8324 11.5118 23.7344 11.0328 24.4724C10.8558 24.7184 10.5278 24.7874 10.2678 24.6364ZM8.5588 23.6384C8.2988 23.4744 8.2308 23.1464 8.4488 22.7634C8.6128 22.5174 8.6948 22.2034 8.6948 21.8754C8.6948 21.5334 8.6128 21.2184 8.4488 20.9724C8.2308 20.6034 8.2988 20.2614 8.5718 20.0974C8.8188 19.9474 9.1328 20.0154 9.2828 20.2344C9.6108 20.6854 9.8028 21.2594 9.8028 21.8754C9.8028 22.4764 9.6108 23.0504 9.2828 23.5024C9.1328 23.7344 8.8188 23.8024 8.5588 23.6384Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.56640625 27.6171875"
          className={className}
        >
          <path
            d="              M18.8534 27.426C26.3594 27.426 32.5664 21.219 32.5664 13.713C32.5664 6.193 26.3454 0 18.8394 0C11.7164 0 5.7834 5.578 5.1954 12.564C5.7284 12.469 6.4534 12.414 7.0134 12.469C7.5884 6.453 12.6464 1.764 18.8394 1.764C25.4574 1.764 30.7894 7.096 30.7894 13.713C30.8024 20.316 25.4574 25.648 18.8534 25.648C17.1854 25.648 15.6134 25.307 14.1774 24.691C13.9184 25.225 13.6034 25.73 13.2074 26.182C14.9294 26.988 16.8434 27.426 18.8534 27.426ZM18.8264 8.135C19.8244 8.135 20.6314 7.328 20.6314 6.344C20.6314 5.346 19.8244 4.553 18.8264 4.553C17.8414 4.553 17.0354 5.346 17.0354 6.344C17.0354 7.328 17.8414 8.135 18.8264 8.135ZM18.8264 9.051C16.8844 9.051 14.0824 8.709 12.7424 8.518C12.6194 8.49 12.4964 8.463 12.3734 8.463C12.0174 8.463 11.6624 8.75 11.6624 9.242C11.6624 9.625 11.8944 9.939 12.2504 10.035C12.6874 10.158 15.8454 10.527 16.2284 10.596C16.6254 10.678 16.8574 11.006 16.8844 11.484C16.8844 12.209 16.8844 14.492 16.6934 15.545C16.5294 16.584 15.3264 21.574 15.2714 21.779C15.1214 22.326 15.4494 22.805 15.9964 22.805C16.3794 22.805 16.6384 22.586 16.7894 22.066C17.0354 21.068 17.8964 17.609 18.1834 16.775C18.3474 16.174 18.4984 15.955 18.8264 15.955C19.1684 15.955 19.3184 16.174 19.5094 16.775C19.7564 17.596 20.6444 21.055 20.8774 22.066C21.0134 22.586 21.2874 22.805 21.6704 22.805C22.2164 22.805 22.5314 22.326 22.3944 21.779C22.3534 21.574 21.1234 16.584 20.9724 15.545C20.8084 14.492 20.8084 12.209 20.8084 11.484C20.8084 11.006 21.0414 10.691 21.4374 10.596C21.8204 10.514 24.9644 10.172 25.4164 10.035C25.7714 9.926 26.0044 9.625 26.0044 9.242C26.0044 8.75 25.6214 8.463 25.2934 8.463C25.1704 8.463 25.0474 8.49 24.9234 8.518C23.5844 8.709 20.8084 9.051 18.8264 9.051ZM6.7954 27.617C10.4864 27.617 13.5894 24.541 13.5894 20.822C13.5894 17.09 10.5274 14.014 6.7954 14.014C3.0764 14.014 0.0004 17.09 0.0004 20.822C0.0004 24.555 3.0764 27.617 6.7954 27.617ZM2.8304 21.492V20.139C2.8304 19.688 3.0764 19.441 3.5004 19.441H4.5664C4.6074 19.441 4.6484 19.428 4.6754 19.387L6.2344 17.883C6.3844 17.76 6.5074 17.691 6.6444 17.691C6.8494 17.691 6.9864 17.842 6.9864 18.047V23.543C6.9864 23.748 6.8494 23.898 6.6444 23.898C6.5074 23.898 6.3844 23.844 6.2344 23.721L4.6754 22.23C4.6484 22.203 4.6074 22.189 4.5664 22.189H3.5004C3.0764 22.189 2.8304 21.93 2.8304 21.492ZM9.5844 23.352C9.4064 23.215 9.3924 22.969 9.5154 22.791C9.8984 22.258 10.1034 21.561 10.1034 20.795C10.1034 20.084 9.9124 19.4 9.5024 18.799C9.3794 18.607 9.4064 18.375 9.5974 18.252C9.7614 18.129 9.9804 18.17 10.1174 18.348C10.6094 18.99 10.8824 19.852 10.8824 20.795C10.8824 21.738 10.6094 22.6 10.1314 23.256C9.9944 23.434 9.7484 23.475 9.5844 23.352ZM8.2034 22.408C8.0394 22.271 7.9984 22.039 8.1484 21.861C8.3394 21.561 8.4634 21.205 8.4634 20.795C8.4634 20.412 8.3394 20.029 8.1484 19.742C7.9984 19.578 8.0254 19.291 8.2304 19.182C8.3944 19.059 8.6404 19.1 8.7914 19.305C9.0644 19.701 9.2284 20.262 9.2284 20.795C9.2284 21.369 9.0504 21.93 8.7504 22.326C8.6134 22.518 8.3674 22.545 8.2034 22.408Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.3046875 28.314453125"
          className={className}
        >
          <path
            d="              M19.1813 28.2461C26.9063 28.2461 33.3043 21.8611 33.3043 14.1231C33.3043 6.3981 26.9063 0.0001 19.1683 0.0001C11.9763 0.0001 5.9743 5.5231 5.1543 12.4961C6.0023 12.3051 7.1093 12.2501 7.9983 12.4001C8.8043 6.9311 13.4663 2.7891 19.1683 2.7891C25.4573 2.7891 30.5153 7.8341 30.5293 14.1231C30.5293 20.4121 25.4703 25.4711 19.1813 25.4711C17.7873 25.4711 16.4743 25.2111 15.2573 24.7601C14.9023 25.6351 14.4103 26.4551 13.7673 27.1521C15.4353 27.8631 17.2673 28.2461 19.1813 28.2461ZM19.1683 8.6951C20.1383 8.6951 20.9183 7.9021 20.9183 6.9451C20.9183 5.9881 20.1383 5.2091 19.1683 5.2091C18.1973 5.2091 17.4183 5.9881 17.4183 6.9451C17.4183 7.9021 18.1973 8.6951 19.1683 8.6951ZM19.1683 9.5841C17.2673 9.5841 14.5473 9.2691 13.2483 9.0641C13.1253 9.0511 13.0023 9.0101 12.8793 9.0101C12.5373 9.0101 12.1953 9.2971 12.1953 9.7751C12.1953 10.1441 12.4143 10.4451 12.7563 10.5411C13.1933 10.6641 16.2563 11.0191 16.6383 11.0881C17.0213 11.1701 17.2403 11.4841 17.2673 11.9491C17.2673 12.6461 17.2673 14.8891 17.0903 15.9001C16.9253 16.9121 15.7503 21.7791 15.7093 21.9841C15.5583 22.5041 15.8733 22.9691 16.3923 22.9691C16.7753 22.9691 17.0353 22.7641 17.1723 22.2581C17.4183 21.2731 18.2523 17.9101 18.5253 17.1031C18.6893 16.5151 18.8403 16.2971 19.1683 16.2971C19.4963 16.2971 19.6323 16.5151 19.8243 17.1031C20.0563 17.9101 20.9313 21.2731 21.1643 22.2581C21.2873 22.7641 21.5603 22.9691 21.9293 22.9691C22.4633 22.9691 22.7633 22.5041 22.6273 21.9841C22.5863 21.7791 21.3963 16.9121 21.2463 15.9001C21.0823 14.8891 21.0823 12.6461 21.0823 11.9491C21.0823 11.4841 21.3143 11.1701 21.6973 11.0881C22.0803 11.0191 25.1423 10.6781 25.5663 10.5411C25.9223 10.4451 26.1403 10.1441 26.1403 9.7751C26.1403 9.2971 25.7853 9.0101 25.4573 9.0101C25.3343 9.0101 25.2113 9.0511 25.0883 9.0641C23.7893 9.2691 21.0823 9.5841 19.1683 9.5841ZM7.0413 28.3141C10.8553 28.3141 14.0683 25.1151 14.0683 21.2731C14.0683 17.4181 10.8963 14.2461 7.0413 14.2461C3.1853 14.2461 0.0003 17.4181 0.0003 21.2731C0.0003 25.1421 3.1853 28.3141 7.0413 28.3141ZM2.8983 21.9301V20.6171C2.8983 20.0701 3.1723 19.7831 3.7053 19.7831H4.6753C4.7303 19.7831 4.7573 19.7691 4.7993 19.7421L6.2893 18.3201C6.4803 18.1561 6.6313 18.0741 6.8083 18.0741C7.0683 18.0741 7.2733 18.2791 7.2733 18.5391V24.0081C7.2733 24.2671 7.0683 24.4731 6.8083 24.4731C6.6313 24.4731 6.4663 24.3901 6.2893 24.2261L4.7993 22.8181C4.7713 22.7911 4.7303 22.7641 4.6753 22.7641H3.7053C3.1723 22.7641 2.8983 22.4901 2.8983 21.9301ZM9.9253 23.8981C9.7073 23.7481 9.6933 23.4611 9.8303 23.2281C10.1853 22.6951 10.3903 21.9981 10.3903 21.2731C10.3903 20.5491 10.1993 19.8651 9.8303 19.3181C9.6663 19.0861 9.7073 18.7851 9.9393 18.6481C10.1443 18.5251 10.4043 18.5661 10.5543 18.7711C11.0473 19.4411 11.3063 20.3301 11.3063 21.2731C11.3063 22.2031 11.0473 23.0921 10.5683 23.7751C10.4043 23.9801 10.1313 24.0351 9.9253 23.8981ZM8.4633 22.9411C8.2443 22.7911 8.2033 22.5041 8.3673 22.2581C8.5583 21.9981 8.6403 21.6561 8.6403 21.2731C8.6403 20.9041 8.5453 20.5351 8.3813 20.2891C8.2033 20.0431 8.2303 19.7281 8.4763 19.5921C8.6813 19.4691 8.9413 19.5101 9.0913 19.7151C9.3923 20.1391 9.5703 20.6991 9.5703 21.2731C9.5703 21.8481 9.3923 22.4221 9.0783 22.8321C8.9273 23.0371 8.6543 23.0921 8.4633 22.9411Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.072265625 28.041015625"
          className={className}
        >
          <path
            d="              M19.1274 27.8904C26.7424 27.8904 33.0724 21.5604 33.0724 13.9454C33.0724 6.3164 26.7284 0.0004 19.1134 0.0004C11.9904 0.0004 6.0294 5.4964 5.2774 12.4274C5.9474 12.3044 6.9184 12.2364 7.6424 12.3324C8.3944 6.6584 13.2074 2.3244 19.1134 2.3244C25.5524 2.3244 30.7344 7.4924 30.7484 13.9454C30.7614 20.3984 25.5664 25.5664 19.1274 25.5664C17.6234 25.5664 16.2144 25.2794 14.9164 24.7734C14.5884 25.4844 14.1774 26.1544 13.6724 26.7554C15.3394 27.4944 17.1854 27.8904 19.1274 27.8904ZM19.0994 8.4354C20.0844 8.4354 20.8774 7.6284 20.8774 6.6584C20.8774 5.6734 20.0844 4.8804 19.0994 4.8804C18.1154 4.8804 17.3224 5.6734 17.3224 6.6584C17.3224 7.6284 18.1154 8.4354 19.0994 8.4354ZM19.0994 9.3244C17.1724 9.3244 14.4104 9.0094 13.0844 8.8044C12.9614 8.7914 12.8384 8.7504 12.7144 8.7504C12.3594 8.7504 12.0174 9.0374 12.0174 9.5294C12.0174 9.8984 12.2364 10.2124 12.5914 10.2954C13.0294 10.4314 16.1464 10.7874 16.5294 10.8694C16.9254 10.9514 17.1584 11.2654 17.1724 11.7444C17.1724 12.4554 17.1724 14.7244 16.9944 15.7504C16.8304 16.7754 15.6404 21.7244 15.5864 21.9294C15.4354 22.4624 15.7634 22.9414 16.2974 22.9414C16.6794 22.9414 16.9394 22.7224 17.0764 22.2164C17.3224 21.2184 18.1704 17.8004 18.4574 16.9664C18.6214 16.3784 18.7714 16.1604 19.0994 16.1604C19.4414 16.1604 19.5784 16.3784 19.7834 16.9664C20.0154 17.8004 20.8904 21.2184 21.1364 22.2164C21.2734 22.7224 21.5334 22.9414 21.9164 22.9414C22.4494 22.9414 22.7634 22.4624 22.6274 21.9294C22.5864 21.7244 21.3694 16.7754 21.2184 15.7504C21.0544 14.7244 21.0544 12.4554 21.0544 11.7444C21.0544 11.2654 21.2874 10.9514 21.6704 10.8694C22.0664 10.7874 25.1834 10.4454 25.6214 10.2954C25.9764 10.1994 26.1954 9.8984 26.1954 9.5294C26.1954 9.0374 25.8264 8.7504 25.4984 8.7504C25.3754 8.7504 25.2524 8.7914 25.1294 8.8044C23.8024 9.0094 21.0544 9.3244 19.0994 9.3244ZM6.9454 28.0414C10.7054 28.0414 13.8904 24.8964 13.8904 21.0954C13.8904 17.2814 10.7594 14.1504 6.9454 14.1504C3.1444 14.1504 0.0004 17.2954 0.0004 21.0954C0.0004 24.9234 3.1444 28.0414 6.9454 28.0414ZM2.9394 21.7654V20.4254C2.9394 19.8924 3.1994 19.6464 3.6914 19.6464H4.7164C4.7444 19.6464 4.7854 19.6194 4.8124 19.6054L6.3434 18.1284C6.5214 17.9784 6.6584 17.9104 6.8224 17.9104C7.0684 17.9104 7.2464 18.0744 7.2464 18.3204V23.8574C7.2464 24.0894 7.0684 24.2674 6.8224 24.2674C6.6584 24.2674 6.5214 24.1994 6.3434 24.0484L4.8124 22.5864C4.7854 22.5584 4.7444 22.5454 4.7164 22.5454H3.6914C3.1994 22.5454 2.9394 22.2854 2.9394 21.7654ZM9.8164 23.6794C9.6254 23.5294 9.6114 23.2554 9.7484 23.0644C10.1034 22.5174 10.3224 21.8204 10.3224 21.0824C10.3224 20.3574 10.1174 19.6734 9.7344 19.1274C9.5844 18.9084 9.6254 18.6344 9.8304 18.4984C10.0214 18.3884 10.2544 18.4164 10.4184 18.6074C10.9104 19.2634 11.1704 20.1524 11.1704 21.0824C11.1704 22.0114 10.9104 22.9004 10.4314 23.5704C10.2674 23.7614 10.0074 23.8024 9.8164 23.6794ZM8.4224 22.7224C8.2164 22.5724 8.1894 22.3124 8.3534 22.1074C8.5314 21.8344 8.6274 21.4924 8.6274 21.0824C8.6274 20.6994 8.5174 20.3164 8.3534 20.0704C8.1894 19.8784 8.2164 19.5644 8.4354 19.4414C8.6404 19.3184 8.8864 19.3594 9.0374 19.5644C9.3244 19.9614 9.5024 20.5214 9.5024 21.0824C9.5024 21.6564 9.3244 22.2164 9.0234 22.6134C8.8734 22.8324 8.6134 22.8734 8.4224 22.7224Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.482421875 28.533203125"
          className={className}
        >
          <path
            d="              M19.2226 28.5199C27.0426 28.5199 33.4826 22.0799 33.4826 14.2599C33.4826 6.4529 27.0296 -0.0001 19.2086 -0.0001C11.9766 -0.0001 5.9196 5.5369 5.0726 12.5649C6.0426 12.3179 7.2596 12.2639 8.2716 12.4419C9.1196 7.1509 13.6586 3.1309 19.2086 3.1309C25.3886 3.1309 30.3376 8.0939 30.3516 14.2599C30.3656 20.4259 25.3886 25.3889 19.2226 25.3889C17.9106 25.3889 16.6656 25.1559 15.5036 24.7329C15.1486 25.7439 14.5746 26.6739 13.8496 27.4529C15.5176 28.1369 17.3226 28.5199 19.2226 28.5199ZM19.2086 8.9009C20.1656 8.9009 20.9456 8.1209 20.9456 7.1779C20.9456 6.2209 20.1656 5.4549 19.2086 5.4549C18.2516 5.4549 17.4866 6.2209 17.4866 7.1779C17.4866 8.1209 18.2516 8.9009 19.2086 8.9009ZM19.2086 9.7759C17.3356 9.7759 14.6426 9.4609 13.3706 9.2699C13.2476 9.2419 13.1246 9.2149 13.0016 9.2149C12.6606 9.2149 12.3316 9.4879 12.3316 9.9669C12.3316 10.3219 12.5366 10.6369 12.8926 10.7189C13.3166 10.8419 16.3376 11.1969 16.7206 11.2659C17.0896 11.3479 17.3086 11.6619 17.3356 12.1129C17.3496 12.8109 17.3356 15.0119 17.1586 16.0099C16.9946 17.0079 15.8456 21.8199 15.7906 22.0259C15.6546 22.5309 15.9546 22.9959 16.4746 22.9959C16.8576 22.9959 17.1036 22.7769 17.2406 22.2849C17.4866 21.3149 18.3066 18.0059 18.5796 17.1989C18.7446 16.6109 18.8806 16.4059 19.2086 16.4059C19.5366 16.4059 19.6736 16.6109 19.8656 17.1989C20.0976 17.9919 20.9586 21.3149 21.1776 22.2849C21.3006 22.7769 21.5746 22.9959 21.9436 22.9959C22.4626 22.9959 22.7636 22.5309 22.6266 22.0259C22.5856 21.8199 21.4106 17.0079 21.2596 16.0099C21.1096 15.0119 21.1096 12.8109 21.1096 12.1129C21.1096 11.6619 21.3286 11.3479 21.7106 11.2659C22.0796 11.1969 25.1156 10.8559 25.5386 10.7189C25.8806 10.6229 26.0996 10.3219 26.0996 9.9669C26.0996 9.4879 25.7446 9.2149 25.4156 9.2149C25.2926 9.2149 25.1696 9.2419 25.0606 9.2699C23.7756 9.4609 21.1096 9.7759 19.2086 9.7759ZM7.1096 28.5329C10.9646 28.5329 14.2046 25.2929 14.2046 21.4099C14.2046 17.5269 11.0056 14.3149 7.1096 14.3149C3.2126 14.3149 -0.0004 17.5269 -0.0004 21.4099C-0.0004 25.3199 3.2126 28.5329 7.1096 28.5329ZM2.8706 22.0669V20.7679C2.8706 20.1929 3.1586 19.9059 3.7046 19.9059H4.6486C4.7036 19.9059 4.7446 19.8789 4.7856 19.8379L6.2476 18.4569C6.4396 18.2929 6.6036 18.2109 6.7946 18.2109C7.0686 18.2109 7.2866 18.4299 7.2866 18.7029V24.1169C7.2866 24.4039 7.0686 24.6229 6.7946 24.6229C6.6036 24.6229 6.4256 24.5409 6.2346 24.3769L4.7856 22.9959C4.7446 22.9549 4.7036 22.9419 4.6486 22.9419H3.7046C3.1586 22.9419 2.8706 22.6409 2.8706 22.0669ZM10.0076 24.0759C9.7756 23.9259 9.7476 23.6109 9.9116 23.3649C10.2536 22.8179 10.4586 22.1489 10.4586 21.4239C10.4586 20.6989 10.2536 20.0289 9.8986 19.4689C9.7346 19.2229 9.7756 18.9079 10.0076 18.7579C10.2406 18.6349 10.4996 18.6759 10.6636 18.8949C11.1566 19.5919 11.4156 20.4809 11.4156 21.4239C11.4156 22.3539 11.1566 23.2419 10.6776 23.9399C10.5136 24.1579 10.2266 24.2129 10.0076 24.0759ZM8.4766 23.1059C8.2446 22.9549 8.2036 22.6539 8.3946 22.3809C8.5726 22.1209 8.6546 21.7929 8.6546 21.4099C8.6546 21.0549 8.5586 20.6859 8.3946 20.4529C8.2036 20.1799 8.2446 19.8519 8.4906 19.7149C8.7086 19.5779 8.9826 19.6329 9.1466 19.8379C9.4476 20.2619 9.6246 20.8359 9.6246 21.4099C9.6246 21.9979 9.4336 22.5719 9.1326 22.9959C8.9826 23.2009 8.6956 23.2559 8.4766 23.1059Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.896484375 27.056640625"
          className={className}
        >
          <path
            d="              M18.4847 26.8102C25.8537 26.8102 31.8967 20.7672 31.8967 13.4122C31.8967 6.0432 25.8537 0.0002 18.4847 0.0002C11.3337 0.0002 5.4417 5.7012 5.0997 12.7692C5.4417 12.7012 5.8247 12.6602 6.1657 12.6742C6.5347 6.1792 11.9087 1.0392 18.4847 1.0392C25.3067 1.0392 30.8577 6.5902 30.8577 13.4122C30.8577 20.2342 25.3207 25.7712 18.4847 25.7712C16.5977 25.7712 14.8067 25.3472 13.1937 24.5822C13.0297 24.8832 12.8377 25.1702 12.6057 25.4292C14.3827 26.3182 16.3787 26.8102 18.4847 26.8102ZM18.4707 7.7652C19.4827 7.7652 20.2887 6.9452 20.2887 5.9332C20.2887 4.9352 19.4827 4.1152 18.4707 4.1152C17.4587 4.1152 16.6527 4.9352 16.6527 5.9332C16.6527 6.9452 17.4587 7.7652 18.4707 7.7652ZM18.4707 8.6812C16.4887 8.6812 13.6587 8.3402 12.3047 8.1352C12.1817 8.1212 12.0587 8.0942 11.9217 8.0942C11.5667 8.0942 11.2107 8.3812 11.2107 8.8872C11.2107 9.2692 11.4297 9.5972 11.7987 9.6792C12.2497 9.7892 15.4357 10.1852 15.8317 10.2542C16.2287 10.3222 16.4747 10.6642 16.4887 11.1562C16.5017 11.8812 16.4887 14.2052 16.3107 15.2712C16.1327 16.3242 14.9157 21.3832 14.8617 21.6012C14.7247 22.1482 15.0387 22.6272 15.5857 22.6272C15.9687 22.6272 16.2557 22.4082 16.3927 21.8882C16.6657 20.8772 17.5137 17.3632 17.8147 16.5152C17.9927 15.9142 18.1287 15.6812 18.4707 15.6812C18.8127 15.6812 18.9627 15.9002 19.1677 16.5152C19.4137 17.3492 20.2887 20.8632 20.5487 21.8882C20.6717 22.4082 20.9727 22.6272 21.3557 22.6272C21.9027 22.6272 22.2167 22.1482 22.0797 21.6012C22.0257 21.3832 20.7947 16.3242 20.6447 15.2712C20.4667 14.2052 20.4667 11.8812 20.4667 11.1562C20.4667 10.6642 20.7127 10.3362 21.1097 10.2542C21.5057 10.1722 24.6917 9.8162 25.1427 9.6792C25.5117 9.5702 25.7307 9.2692 25.7307 8.8872C25.7307 8.3812 25.3617 8.0942 25.0197 8.0942C24.8827 8.0942 24.7597 8.1212 24.6367 8.1352C23.2967 8.3402 20.4667 8.6812 18.4707 8.6812ZM6.6037 27.0562C10.1997 27.0562 13.2067 24.0762 13.2067 20.4532C13.2067 16.8302 10.2267 13.8492 6.6037 13.8492C2.9937 13.8492 -0.0003 16.8442 -0.0003 20.4532C-0.0003 24.0902 2.9937 27.0562 6.6037 27.0562ZM2.6657 21.1372V19.7562C2.6657 19.4142 2.9257 19.1812 3.2407 19.1812H4.3617C4.4157 19.1812 4.4567 19.1682 4.4977 19.1132L6.0837 17.5682C6.1937 17.4862 6.2887 17.4312 6.3987 17.4312C6.5627 17.4312 6.6447 17.5412 6.6447 17.7052V23.1462C6.6447 23.3102 6.5627 23.4202 6.3987 23.4202C6.2887 23.4202 6.1937 23.3652 6.0837 23.2832L4.4977 21.7652C4.4707 21.7242 4.4157 21.7112 4.3617 21.7112H3.2407C2.9257 21.7112 2.6657 21.4652 2.6657 21.1372ZM9.2697 22.9282C9.1187 22.8042 9.1057 22.5992 9.2147 22.4492C9.6247 21.9162 9.8297 21.2322 9.8297 20.4262C9.8297 19.7152 9.6387 19.0312 9.2017 18.3752C9.1057 18.2242 9.1187 18.0472 9.2837 17.9242C9.4197 17.8142 9.6117 17.8552 9.7347 18.0062C10.2127 18.6352 10.4997 19.4692 10.4997 20.4262C10.4997 21.3832 10.2127 22.2172 9.7347 22.8452C9.6117 22.9962 9.4067 23.0372 9.2697 22.9282ZM7.9157 21.9982C7.7927 21.8882 7.7657 21.6832 7.8747 21.5472C8.0937 21.2192 8.2307 20.8222 8.2307 20.4262C8.2307 20.0292 8.1077 19.6462 7.8887 19.3182C7.7657 19.1952 7.7797 18.9492 7.9297 18.8402C8.0937 18.7172 8.3267 18.7582 8.4497 18.9762C8.7087 19.3732 8.8727 19.9062 8.8727 20.4262C8.8727 20.9862 8.6957 21.5472 8.3947 21.9432C8.2577 22.0942 8.0387 22.1072 7.9157 21.9982Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5546875 26.755859375"
          className={className}
        >
          <path
            d="              M18.3063 26.4961C25.5933 26.4961 31.5543 20.5351 31.5543 13.2481C31.5543 5.9611 25.5933 0.0001 18.3063 0.0001C11.1423 0.0001 5.2633 5.7561 5.0583 12.8651C5.2913 12.8101 5.4963 12.7831 5.7423 12.7561C5.9883 6.0431 11.5393 0.6701 18.3063 0.6701C25.2383 0.6701 30.8843 6.3031 30.8843 13.2481C30.8843 20.1801 25.2383 25.8261 18.3063 25.8261C16.3103 25.8261 14.3963 25.3481 12.6873 24.5141C12.5783 24.6911 12.4413 24.8691 12.2913 25.0471C14.1093 25.9761 16.1323 26.4961 18.3063 26.4961ZM18.2933 7.5601C19.3043 7.5601 20.1253 6.7401 20.1253 5.7151C20.1253 4.7031 19.3043 3.8831 18.2933 3.8831C17.2673 3.8831 16.4473 4.7031 16.4473 5.7151C16.4473 6.7401 17.2673 7.5601 18.2933 7.5601ZM18.2933 8.4761C16.2973 8.4761 13.4253 8.1351 12.0723 7.9431C11.9493 7.9161 11.8263 7.8891 11.6893 7.8891C11.3343 7.8891 10.9653 8.1891 10.9653 8.6951C10.9653 9.0781 11.1973 9.4061 11.5663 9.4881C12.0173 9.5981 15.2303 9.9941 15.6273 10.0621C16.0373 10.1441 16.2833 10.4861 16.2973 10.9781C16.3103 11.7031 16.2973 14.0551 16.1053 15.1211C15.9273 16.1741 14.7113 21.2731 14.6563 21.4921C14.5193 22.0531 14.8343 22.5311 15.3943 22.5311C15.7773 22.5311 16.0503 22.3121 16.1873 21.7791C16.4743 20.7671 17.3223 17.2261 17.6233 16.3651C17.8143 15.7771 17.9373 15.5311 18.2933 15.5311C18.6343 15.5311 18.7713 15.7641 18.9903 16.3651C19.2503 17.2131 20.1253 20.7541 20.3843 21.7791C20.5073 22.3121 20.7953 22.5311 21.1913 22.5311C21.7383 22.5311 22.0523 22.0531 21.9163 21.4921C21.8613 21.2731 20.6313 16.1741 20.4663 15.1211C20.2893 14.0551 20.2893 11.7031 20.2893 10.9781C20.2893 10.4861 20.5353 10.1581 20.9453 10.0621C21.3413 9.9801 24.5543 9.6251 25.0063 9.4881C25.3753 9.3651 25.6073 9.0781 25.6073 8.6951C25.6073 8.1891 25.2243 7.8891 24.8823 7.8891C24.7463 7.8891 24.6233 7.9161 24.5003 7.9431C23.1463 8.1351 20.2893 8.4761 18.2933 8.4761ZM6.5073 26.7561C10.0623 26.7561 13.0023 23.8301 13.0023 20.2621C13.0023 16.6801 10.0763 13.7541 6.5073 13.7541C2.9533 13.7541 0.0003 16.7071 0.0003 20.2621C0.0003 23.8301 2.9533 26.7561 6.5073 26.7561ZM2.5973 20.9451V19.5641C2.5973 19.2641 2.8433 19.0451 3.1173 19.0451H4.2653C4.3203 19.0451 4.3613 19.0171 4.4023 18.9761L6.0153 17.4041C6.0973 17.3361 6.1933 17.2811 6.2753 17.2811C6.4123 17.2811 6.4803 17.3771 6.4803 17.5141V22.9281C6.4803 23.0641 6.4123 23.1741 6.2753 23.1741C6.1933 23.1741 6.0973 23.1191 6.0153 23.0511L4.4023 21.5061C4.3753 21.4781 4.3203 21.4651 4.2653 21.4651H3.1173C2.8433 21.4651 2.5973 21.2191 2.5973 20.9451ZM9.1193 22.6951C8.9823 22.5721 8.9553 22.4081 9.0643 22.2711C9.4883 21.7241 9.6933 21.0411 9.6933 20.2211C9.6933 19.5231 9.5023 18.8401 9.0503 18.1421C8.9553 18.0191 8.9823 17.8691 9.1193 17.7461C9.2283 17.6371 9.4203 17.6781 9.5293 17.8141C10.0213 18.4431 10.2953 19.2641 10.2953 20.2211C10.2953 21.1781 10.0213 21.9981 9.5293 22.6271C9.4203 22.7641 9.2423 22.8051 9.1193 22.6951ZM7.7653 21.7791C7.6703 21.6701 7.6293 21.4921 7.7383 21.3831C7.9703 21.0271 8.1073 20.6311 8.1073 20.2211C8.1073 19.8241 7.9843 19.4411 7.7523 19.0861C7.6293 18.9901 7.6563 18.7581 7.7933 18.6481C7.9293 18.5251 8.1483 18.5661 8.2713 18.7991C8.5313 19.1951 8.6953 19.7151 8.6953 20.2211C8.6953 20.7811 8.5173 21.3421 8.2033 21.7381C8.0803 21.8751 7.8753 21.8751 7.7653 21.7791Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}