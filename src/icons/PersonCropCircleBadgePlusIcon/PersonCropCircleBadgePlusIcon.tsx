import { IconProps } from "../../types"

export default function PersonCropCircleBadgePlusIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.37109375 29.859375"
          className={className}
        >
          <path
            d="              M19.4415 29.8591C27.7265 29.8591 34.3715 23.1051 34.3715 14.9301C34.3715 6.6991 27.6585 0.0001 19.4415 0.0001C11.9215 0.0001 5.6875 5.6051 4.6625 12.8381C6.2485 12.3321 7.9705 12.2911 9.6255 12.6741C10.6505 8.1891 14.6425 4.8671 19.4415 4.8671C25.0055 4.8671 29.5035 9.3651 29.5035 14.9301C29.5035 17.8551 28.2735 20.4801 26.2775 22.3261C24.5955 20.9041 22.3265 19.9471 19.4415 19.9471C18.5525 19.9471 17.7055 20.0291 16.9395 20.1931C17.0625 20.8081 17.1305 21.4511 17.1305 22.0941C17.1305 24.7321 16.0235 27.1661 14.2465 28.9431C15.8735 29.5451 17.6235 29.8591 19.4415 29.8591ZM19.4415 18.0191C22.1485 18.0331 24.2265 15.6951 24.2265 12.7971C24.2265 10.0491 22.1215 7.6701 19.4415 7.6701C16.7615 7.6701 14.6285 10.0491 14.6425 12.7971C14.6695 15.6951 16.7205 18.0191 19.4415 18.0191ZM7.4515 29.5581C11.5255 29.5581 14.9025 26.1541 14.9025 22.0941C14.9025 18.0191 11.5255 14.6561 7.4515 14.6561C3.3635 14.6561 0.0005 18.0191 0.0005 22.0941C0.0005 26.1541 3.3635 29.5581 7.4515 29.5581ZM7.4515 27.0571C6.6305 27.0571 6.0975 26.5231 6.0975 25.7171V23.4611H3.8695C3.0625 23.4611 2.5155 22.9141 2.5155 22.1071C2.5155 21.2871 3.0355 20.7541 3.8695 20.7541H6.0975V18.5391C6.0975 17.7321 6.6305 17.1851 7.4515 17.1851C8.2575 17.1851 8.8045 17.7051 8.8045 18.5391V20.7541H11.0465C11.8395 20.7541 12.3865 21.2871 12.3865 22.1071C12.3865 22.9141 11.8395 23.4611 11.0465 23.4611H8.8045V25.7171C8.8045 26.5231 8.2575 27.0571 7.4515 27.0571Z"
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
            d="              M19.2913 28.8886C27.2483 28.8886 33.7283 22.3396 33.7283 14.4376C33.7283 6.5216 27.2073 -0.0004 19.2773 -0.0004C11.9633 -0.0004 5.8652 5.5506 4.9763 12.6326C6.0973 12.3186 7.4513 12.2776 8.6403 12.5096C9.5293 7.4236 13.9313 3.5956 19.2773 3.5956C25.2933 3.5956 30.1333 8.4356 30.1333 14.4376C30.1333 17.4176 28.9573 20.0836 27.0293 22.0386C25.5113 20.5216 22.7913 19.2776 19.2773 19.2776C18.1833 19.2776 17.1583 19.4006 16.2283 19.6196C16.3793 20.2476 16.4613 20.9176 16.4613 21.5876C16.4613 23.9806 15.5043 26.1816 13.9723 27.8496C15.6273 28.5196 17.4183 28.8886 19.2913 28.8886ZM19.2773 17.1586C21.9572 17.1716 24.0212 14.8886 24.0212 11.9626C24.0212 9.2146 21.9293 6.8766 19.2773 6.8766C16.6253 6.8766 14.5193 9.2146 14.5473 11.9626C14.5603 14.8746 16.6112 17.1446 19.2773 17.1586ZM7.2053 28.8066C11.1293 28.8066 14.3963 25.5256 14.3963 21.6016C14.3963 17.6636 11.1563 14.4106 7.2053 14.4106C3.2543 14.4106 0.0002 17.6636 0.0002 21.6016C0.0002 25.5386 3.2543 28.8066 7.2053 28.8066ZM7.2053 26.2636C6.5493 26.2636 6.1113 25.8266 6.1113 25.1696V22.7086H3.6503C3.0083 22.7086 2.5563 22.2716 2.5563 21.6016C2.5563 20.9456 2.9943 20.5076 3.6503 20.5076H6.1113V18.0746C6.1113 17.4176 6.5493 16.9666 7.2053 16.9666C7.8613 16.9666 8.2993 17.4046 8.2993 18.0746V20.5076H10.7602C11.4023 20.5076 11.8403 20.9456 11.8403 21.6016C11.8403 22.2716 11.4023 22.7086 10.7602 22.7086H8.2993V25.1696C8.2993 25.8266 7.8613 26.2636 7.2053 26.2636Z"
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
            d="              M19.3735 29.4084C27.5075 29.4084 34.0705 22.7504 34.0705 14.7114C34.0705 6.6304 27.4535 0.0004 19.3735 0.0004C11.9495 0.0004 5.7695 5.5784 4.8125 12.7554C6.1795 12.3324 7.7385 12.2914 9.1605 12.6054C10.1175 7.8344 14.3145 4.2794 19.3735 4.2794C25.1425 4.2794 29.8045 8.9274 29.8045 14.7114C29.8045 17.6504 28.5875 20.3024 26.6325 22.1894C25.0335 20.7264 22.5585 19.6324 19.3735 19.6324C18.3885 19.6324 17.4585 19.7424 16.6115 19.9334C16.7485 20.5484 16.8165 21.2054 16.8165 21.8614C16.8165 24.3904 15.7915 26.7144 14.1235 28.4374C15.7635 29.0664 17.5275 29.4084 19.3735 29.4084ZM19.3735 17.6234C22.0665 17.6364 24.1305 15.3264 24.1305 12.4144C24.1305 9.6664 22.0395 7.3004 19.3735 7.3004C16.6935 7.3004 14.5875 9.6664 14.6015 12.4144C14.6155 15.3124 16.6795 17.6094 19.3735 17.6234ZM7.3415 29.2034C11.3335 29.2034 14.6695 25.8674 14.6695 21.8614C14.6695 17.8554 11.3475 14.5474 7.3415 14.5474C3.3225 14.5474 -0.0005 17.8554 -0.0005 21.8614C-0.0005 25.8674 3.3225 29.2034 7.3415 29.2034ZM7.3415 26.6874C6.5895 26.6874 6.0975 26.1954 6.0975 25.4704V23.1054H3.7735C3.0485 23.1054 2.5295 22.6134 2.5295 21.8754C2.5295 21.1364 3.0215 20.6444 3.7735 20.6444H6.0975V18.3204C6.0975 17.5954 6.5895 17.0894 7.3415 17.0894C8.0805 17.0894 8.5725 17.5684 8.5725 18.3204V20.6444H10.9105C11.6485 20.6444 12.1405 21.1364 12.1405 21.8754C12.1405 22.6134 11.6485 23.1054 10.9105 23.1054H8.5725V25.4704C8.5725 26.1954 8.0805 26.6874 7.3415 26.6874Z"
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
            d="              M18.8534 27.426C26.3594 27.426 32.5664 21.219 32.5664 13.713C32.5664 6.193 26.3454 0 18.8394 0C11.7164 0 5.7834 5.564 5.1954 12.551C5.7284 12.455 6.4534 12.4 7.0134 12.455C7.6014 6.439 12.6464 1.764 18.8394 1.764C25.4574 1.764 30.7894 7.096 30.7894 13.713C30.7894 16.83 29.6134 19.66 27.6584 21.779C26.4414 20.098 23.1734 18.293 18.8394 18.293C17.4184 18.293 16.1054 18.498 14.9434 18.826C15.1074 19.455 15.1894 20.125 15.1894 20.795C15.1894 22.832 14.4374 24.705 13.2074 26.182C14.9294 26.975 16.8434 27.426 18.8534 27.426ZM18.8394 15.955C21.4644 15.969 23.5024 13.727 23.5024 10.801C23.5024 8.053 21.4374 5.756 18.8394 5.756C16.2424 5.756 14.1644 8.053 14.1774 10.801C14.1914 13.713 16.2284 15.928 18.8394 15.955ZM6.7954 27.617C10.4864 27.617 13.5894 24.541 13.5894 20.822C13.5894 17.09 10.5274 14.014 6.7954 14.014C3.0764 14.014 0.0004 17.09 0.0004 20.822C0.0004 24.555 3.0764 27.617 6.7954 27.617ZM6.7954 25.129C6.3434 25.129 6.0704 24.828 6.0704 24.404V21.547H3.2134C2.7894 21.547 2.4884 21.26 2.4884 20.822C2.4884 20.371 2.7894 20.084 3.2134 20.084H6.0704V17.24C6.0704 16.816 6.3434 16.516 6.7954 16.516C7.2464 16.516 7.5334 16.816 7.5334 17.24V20.084H10.3774C10.8004 20.084 11.1014 20.371 11.1014 20.822C11.1014 21.26 10.8004 21.547 10.3774 21.547H7.5334V24.404C7.5334 24.828 7.2464 25.129 6.7954 25.129Z"
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
            d="              M19.1813 28.2461C26.9203 28.2461 33.3043 21.8481 33.3043 14.1231C33.3043 6.3981 26.8923 0.0001 19.1683 0.0001C11.9763 0.0001 5.9743 5.5101 5.1543 12.4961C5.9883 12.3051 7.1093 12.2501 7.9983 12.3871C8.8043 6.9311 13.4663 2.7891 19.1683 2.7891C25.4573 2.7891 30.5153 7.8341 30.5153 14.1231C30.5153 17.1171 29.3813 19.8241 27.4943 21.8481C26.0863 20.2751 23.0783 18.8401 19.1683 18.8401C17.9373 18.8401 16.8023 18.9901 15.7633 19.2361C15.9273 19.8791 16.0093 20.5761 16.0093 21.2731C16.0093 23.5021 15.1623 25.5531 13.7813 27.1391C15.4493 27.8491 17.2813 28.2461 19.1813 28.2461ZM19.1683 16.5981C21.8063 16.6111 23.8713 14.3551 23.8713 11.4301C23.8713 8.6681 21.7933 6.3571 19.1683 6.3571C16.5293 6.3571 14.4373 8.6681 14.4653 11.4301C14.4783 14.3421 16.5293 16.5701 19.1683 16.5981ZM7.0273 28.3141C10.8553 28.3141 14.0683 25.1151 14.0683 21.2731C14.0683 17.4181 10.8963 14.2461 7.0273 14.2461C3.1723 14.2461 0.0003 17.4181 0.0003 21.2731C0.0003 25.1421 3.1723 28.3141 7.0273 28.3141ZM7.0273 25.7441C6.4663 25.7441 6.0973 25.3611 6.0973 24.8141V22.2171H3.5133C2.9533 22.2171 2.5843 21.8481 2.5843 21.2731C2.5843 20.7131 2.9533 20.3441 3.5133 20.3441H6.0973V17.7601C6.0973 17.2131 6.4663 16.8301 7.0273 16.8301C7.6013 16.8301 7.9703 17.1991 7.9703 17.7601V20.3441H10.5543C11.1153 20.3441 11.4843 20.7131 11.4843 21.2731C11.4843 21.8481 11.1153 22.2171 10.5543 22.2171H7.9703V24.8141C7.9703 25.3611 7.6013 25.7441 7.0273 25.7441Z"
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
            d="              M19.1274 27.8904C26.7424 27.8904 33.0724 21.5604 33.0724 13.9454C33.0724 6.3164 26.7284 0.0004 19.1134 0.0004C11.9904 0.0004 6.0434 5.4824 5.2774 12.4144C5.9474 12.2914 6.9184 12.2364 7.6424 12.3184C8.3944 6.6444 13.2074 2.3244 19.1134 2.3244C25.5524 2.3244 30.7484 7.4924 30.7484 13.9454C30.7484 16.9534 29.6274 19.6874 27.7544 21.7244C26.4144 20.1254 23.2424 18.5934 19.1134 18.5934C17.8004 18.5934 16.5974 18.7574 15.5174 19.0174C15.6814 19.6734 15.7634 20.3844 15.7634 21.0824C15.7634 23.2144 14.9844 25.1974 13.6724 26.7424C15.3534 27.4804 17.1994 27.8904 19.1274 27.8904ZM19.1134 16.2694C21.7384 16.2964 23.8024 14.0544 23.8024 11.1154C23.8024 8.3534 21.7244 6.0704 19.1134 6.0704C16.4884 6.0704 14.3964 8.3534 14.4234 11.1154C14.4374 14.0414 16.4884 16.2424 19.1134 16.2694ZM6.9454 28.0414C10.7054 28.0414 13.8904 24.8964 13.8904 21.0954C13.8904 17.2814 10.7594 14.1504 6.9454 14.1504C3.1444 14.1504 0.0004 17.2954 0.0004 21.0954C0.0004 24.9234 3.1444 28.0414 6.9454 28.0414ZM6.9454 25.4434C6.4394 25.4434 6.1114 25.1154 6.1114 24.6094V21.9294H3.4314C2.9394 21.9294 2.5974 21.6014 2.5974 21.0954C2.5974 20.5894 2.9394 20.2614 3.4314 20.2614H6.1114V17.5824C6.1114 17.0894 6.4394 16.7484 6.9454 16.7484C7.4514 16.7484 7.7794 17.0894 7.7794 17.5824V20.2614H10.4594C10.9514 20.2614 11.2934 20.5894 11.2934 21.0954C11.2934 21.6014 10.9514 21.9294 10.4594 21.9294H7.7794V24.6094C7.7794 25.1154 7.4514 25.4434 6.9454 25.4434Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.49609375 28.533203125"
          className={className}
        >
          <path
            d="              M19.2363 28.5199C27.0703 28.5199 33.4963 22.0669 33.4963 14.2599C33.4963 6.4529 27.0433 -0.0001 19.2223 -0.0001C11.9763 -0.0001 5.9333 5.5239 5.0863 12.5509C6.0433 12.3179 7.2593 12.2639 8.2853 12.4419C9.1193 7.1509 13.6723 3.1309 19.2223 3.1309C25.3883 3.1309 30.3653 8.0939 30.3653 14.2599C30.3653 17.2399 29.2033 19.9469 27.2893 21.9299C25.8403 20.3849 22.9683 19.0309 19.2223 19.0309C18.0473 19.0309 16.9673 19.1679 15.9683 19.4009C16.1333 20.0429 16.2153 20.7269 16.2153 21.4099C16.2153 23.7069 15.3263 25.8259 13.8633 27.4529C15.5313 28.1369 17.3493 28.5199 19.2363 28.5199ZM19.2223 16.8439C21.8753 16.8579 23.9393 14.5879 23.9393 11.6619C23.9393 8.9009 21.8613 6.5759 19.2223 6.5759C16.5843 6.5759 14.4783 8.9009 14.5063 11.6619C14.5193 14.5739 16.5703 16.8169 19.2223 16.8439ZM7.1093 28.5329C10.9783 28.5329 14.2183 25.2929 14.2183 21.4099C14.2183 17.5269 11.0063 14.3149 7.1093 14.3149C3.2133 14.3149 0.0003 17.5269 0.0003 21.4099C0.0003 25.3199 3.2133 28.5329 7.1093 28.5329ZM7.1093 25.9629C6.5083 25.9629 6.1113 25.5669 6.1113 24.9649V22.4219H3.5823C2.9803 22.4219 2.5703 22.0259 2.5703 21.4239C2.5703 20.8219 2.9803 20.4259 3.5823 20.4259H6.1113V17.8969C6.1113 17.2949 6.5083 16.8989 7.1093 16.8989C7.7243 16.8989 8.1213 17.2949 8.1213 17.8969V20.4259H10.6503C11.2523 20.4259 11.6483 20.8219 11.6483 21.4239C11.6483 22.0259 11.2523 22.4219 10.6503 22.4219H8.1213V24.9649C8.1213 25.5669 7.7243 25.9629 7.1093 25.9629Z"
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
            d="              M18.4847 26.8102C25.8537 26.8102 31.8967 20.7672 31.8967 13.4122C31.8967 6.0432 25.8537 0.0002 18.4847 0.0002C11.3337 0.0002 5.4547 5.6742 5.0997 12.7422C5.4417 12.6742 5.8247 12.6332 6.1657 12.6462C6.5487 6.1662 11.9087 1.0392 18.4847 1.0392C25.3067 1.0392 30.8577 6.5902 30.8577 13.4122C30.8577 16.6792 29.5857 19.6462 27.5077 21.8612C26.4687 20.0562 23.0777 17.8832 18.4847 17.8832C16.8987 17.8832 15.4497 18.1562 14.1917 18.5662C14.3417 19.1682 14.4237 19.7972 14.4237 20.4262C14.4237 22.3262 13.7267 24.0622 12.5917 25.4292C14.3687 26.3182 16.3787 26.8102 18.4847 26.8102ZM18.4847 15.5312C21.1097 15.5312 23.1057 13.3032 23.1057 10.3902C23.1057 7.6562 21.0687 5.3592 18.4847 5.3592C15.9137 5.3592 13.8497 7.6562 13.8637 10.3902C13.8767 13.2892 15.8727 15.5172 18.4847 15.5312ZM6.6037 27.0562C10.1997 27.0562 13.2067 24.0762 13.2067 20.4532C13.2067 16.8302 10.2267 13.8492 6.6037 13.8492C2.9937 13.8492 -0.0003 16.8442 -0.0003 20.4532C-0.0003 24.0902 2.9937 27.0562 6.6037 27.0562ZM6.6037 24.7192C6.2347 24.7192 6.0157 24.4722 6.0157 24.1312V21.0412H2.9257C2.5977 21.0412 2.3377 20.8222 2.3377 20.4532C2.3377 20.0842 2.5977 19.8652 2.9257 19.8652H6.0157V16.7892C6.0157 16.4742 6.2347 16.2012 6.6037 16.2012C6.9727 16.2012 7.1917 16.4742 7.1917 16.7892V19.8652H10.2537C10.5957 19.8652 10.8557 20.0842 10.8557 20.4532C10.8557 20.8222 10.5957 21.0412 10.2537 21.0412H7.1917V24.1312C7.1917 24.4722 6.9727 24.7192 6.6037 24.7192Z"
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
            d="              M18.3063 26.4961C25.5933 26.4961 31.5543 20.5351 31.5543 13.2481C31.5543 5.9611 25.5933 0.0001 18.3063 0.0001C11.1423 0.0001 5.2913 5.7281 5.0583 12.8241C5.2913 12.7831 5.4963 12.7421 5.7423 12.7281C6.0023 6.0291 11.5393 0.6701 18.3063 0.6701C25.2383 0.6701 30.8843 6.3031 30.8843 13.2481C30.8843 16.5841 29.5723 19.6331 27.4393 21.8891C26.4823 20.0291 23.0233 17.6781 18.3063 17.6781C16.6383 17.6781 15.1213 17.9781 13.8083 18.4301C13.9593 19.0041 14.0273 19.6191 14.0273 20.2211C14.0273 22.0531 13.3713 23.7211 12.2773 25.0471C14.0953 25.9761 16.1323 26.4961 18.3063 26.4961ZM18.3063 15.2991C20.9183 15.2991 22.9143 13.0701 22.9143 10.1721C22.9143 7.4511 20.8633 5.1401 18.3063 5.1401C15.7363 5.1401 13.6853 7.4511 13.6993 10.1721C13.7133 13.0701 15.6813 15.2991 18.3063 15.2991ZM6.5073 26.7561C10.0623 26.7561 13.0023 23.8301 13.0023 20.2621C13.0023 16.6801 10.0763 13.7541 6.5073 13.7541C2.9533 13.7541 0.0003 16.7071 0.0003 20.2621C0.0003 23.8301 2.9533 26.7561 6.5073 26.7561ZM6.5073 24.5001C6.1793 24.5001 5.9883 24.2671 5.9883 23.9801V20.7811H2.7753C2.5023 20.7811 2.2693 20.5901 2.2693 20.2621C2.2693 19.9331 2.5023 19.7421 2.7753 19.7421H5.9883V16.5561C5.9883 16.2831 6.1793 16.0371 6.5073 16.0371C6.8363 16.0371 7.0133 16.2831 7.0133 16.5561V19.7421H10.1993C10.5003 19.7421 10.7183 19.9331 10.7183 20.2621C10.7183 20.5901 10.5003 20.7811 10.1993 20.7811H7.0133V23.9801C7.0133 24.2671 6.8363 24.5001 6.5073 24.5001Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
