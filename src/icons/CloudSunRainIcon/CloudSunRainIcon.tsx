import { IconProps } from "../../types"

export default function CloudSunRainIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.162109375 42.060425387059325"
          className={className}
        >
          <path
            d="              M28.2052 5.6871C29.1352 5.6871 29.8872 4.9081 29.8872 3.9781V1.7091C29.8872 0.7651 29.1352 0.0001 28.2052 0.0001C27.2752 0.0001 26.5232 0.7651 26.5232 1.7091V3.9781C26.5232 4.9081 27.2752 5.6871 28.2052 5.6871ZM19.2502 8.3811C19.9202 9.0511 21.0002 9.0641 21.6422 8.4081C22.2992 7.7521 22.2712 6.6991 21.6152 6.0151L20.0292 4.3751C19.4002 3.7191 18.2652 3.7321 17.6232 4.3751C16.9672 5.0311 16.9942 6.1111 17.6502 6.7671ZM34.7812 8.4221C35.4242 9.0781 36.5172 9.0511 37.1742 8.3941L38.7872 6.7951C39.4572 6.1391 39.4572 5.0451 38.8012 4.4021C38.1582 3.7461 37.0782 3.7601 36.4082 4.4301L34.7952 6.0151C34.1252 6.6581 34.1252 7.7791 34.7812 8.4221ZM6.9312 30.9391H22.0662C26.5642 30.9391 30.0782 27.4801 30.0782 23.0371C30.0782 22.6271 30.0512 22.2301 29.9962 21.8341C33.1132 21.0961 35.3962 18.3751 35.3962 14.9841C35.3962 10.9781 32.2112 7.8061 28.2462 7.8061C24.7602 7.8061 21.9162 10.1851 21.2052 13.4121C19.4692 11.3611 16.9532 10.2951 13.8772 10.2951C9.0102 10.2951 5.0172 13.6851 4.1562 18.5121C1.6132 19.3321 0.0002 21.5881 0.0002 24.3631C0.0002 28.1781 2.9392 30.9391 6.9312 30.9391ZM24.6782 14.9161C24.6782 12.9611 26.2632 11.3751 28.2322 11.3751C30.1872 11.3751 31.7732 12.9611 31.7732 14.9161C31.7732 16.7341 30.4202 18.2241 28.6832 18.4301C27.7402 17.0491 26.3592 16.0101 24.7192 15.4631C24.6912 15.2711 24.6782 15.0801 24.6782 14.9161ZM39.1702 16.6251H41.4532C42.3962 16.6251 43.1622 15.8871 43.1622 14.9711C43.1622 14.0411 42.3962 13.2621 41.4532 13.2621H39.1702C38.2402 13.2621 37.4612 14.0411 37.4612 14.9711C37.4612 15.8871 38.2402 16.6251 39.1702 16.6251ZM7.0682 26.8791C5.0722 26.8791 4.0742 25.8671 4.0742 24.4041C4.0742 23.0781 4.9352 22.1351 6.7812 21.6561C7.5882 21.4511 7.7932 21.0821 7.9292 20.2751C8.5722 16.2691 10.8962 14.3281 13.8772 14.3281C16.1052 14.3281 18.0062 15.6401 19.3182 18.0601C19.6872 18.7171 20.0562 18.9631 20.8902 18.9631C24.4592 18.9631 26.0172 20.7671 26.0172 23.0921C26.0172 25.2521 24.4312 26.8791 21.9162 26.8791ZM36.3942 25.5251C37.0512 26.1811 38.1312 26.1951 38.7872 25.5531C39.4432 24.8961 39.4022 23.8301 38.7602 23.1461L37.1742 21.5191C36.5312 20.8631 35.4102 20.8771 34.7542 21.5191C34.1112 22.1761 34.1382 23.2561 34.7952 23.9121ZM17.9102 37.5981L19.5922 34.6851C19.9202 34.1251 19.7832 33.3871 19.1812 33.0451C18.5802 32.7031 17.9242 32.9221 17.5682 33.5371L15.8732 36.4491C15.5582 37.0231 15.6812 37.7341 16.2832 38.0761C16.8712 38.4181 17.5822 38.1721 17.9102 37.5981ZM7.0132 37.5981L8.7092 34.6851C9.0372 34.1251 8.9002 33.3871 8.2992 33.0451C7.6972 32.7031 7.0412 32.9221 6.6852 33.5371L4.9902 36.4491C4.6622 37.0231 4.7852 37.7341 5.3872 38.0761C5.9882 38.4181 6.6992 38.1721 7.0132 37.5981ZM22.2442 41.4261L23.9392 38.5141C24.2672 37.9531 24.1172 37.2151 23.5152 36.8731C22.9142 36.5311 22.2712 36.7501 21.9022 37.3651L20.2212 40.2771C19.8922 40.8381 20.0152 41.5621 20.6172 41.9041C21.2192 42.2461 21.9162 41.9861 22.2442 41.4261ZM11.3612 41.4261L13.0432 38.5141C13.3712 37.9531 13.2342 37.2151 12.6332 36.8731C12.0312 36.5311 11.3752 36.7501 11.0192 37.3651L9.3242 40.2771C9.0102 40.8381 9.1332 41.5621 9.7342 41.9041C10.3222 42.2461 11.0332 42.0001 11.3612 41.4261Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.453125 40.19024024493577"
          className={className}
        >
          <path
            d="              M26.8922 5.4551C27.6722 5.4551 28.3012 4.7991 28.3012 4.0331V1.4221C28.3012 0.6421 27.6722 0.0001 26.8922 0.0001C26.1132 0.0001 25.4842 0.6421 25.4842 1.4221V4.0331C25.4842 4.7991 26.1132 5.4551 26.8922 5.4551ZM18.4432 8.1211C19.0042 8.6821 19.9202 8.6821 20.4532 8.1351C20.9862 7.5881 20.9862 6.6991 20.4392 6.1391L18.5942 4.2661C18.0602 3.7191 17.1312 3.7321 16.5972 4.2661C16.0512 4.8121 16.0642 5.7151 16.6112 6.2621ZM33.3322 8.1481C33.8792 8.6821 34.7952 8.6821 35.3422 8.1211L37.1872 6.2751C37.7482 5.7281 37.7482 4.8261 37.2012 4.2791C36.6542 3.7321 35.7652 3.7461 35.2052 4.2931L33.3462 6.1391C32.7992 6.6851 32.7992 7.6011 33.3322 8.1481ZM6.3572 29.2851H21.3282C25.5532 29.2851 28.8472 26.0581 28.8472 21.9161C28.8472 21.6831 28.8342 21.4511 28.8202 21.2321C31.7462 20.4261 33.8652 17.7871 33.8652 14.5741C33.8652 10.7051 30.7752 7.6011 26.9202 7.6011C23.6522 7.6011 20.9452 9.7751 20.1662 12.7691C18.4572 10.8141 16.0642 9.7341 13.2342 9.7341C8.5312 9.7341 4.6352 13.1801 3.9922 17.8421C1.5722 18.6071 0.0002 20.7131 0.0002 23.3511C0.0002 26.7971 2.6252 29.2851 6.3572 29.2851ZM22.7502 14.5471C22.7502 12.2231 24.5822 10.3911 26.9062 10.3911C29.2172 10.3911 31.0622 12.2231 31.0622 14.5471C31.0622 16.4611 29.7912 18.0601 28.0552 18.5391C27.0292 16.5431 25.1152 15.1071 22.7502 14.6701C22.7502 14.6291 22.7502 14.5881 22.7502 14.5471ZM6.4122 26.1541C4.2382 26.1541 3.1312 24.9781 3.1312 23.3921C3.1312 22.0121 3.9782 20.9041 5.9062 20.3981C6.6442 20.2071 6.8632 19.8651 6.9592 19.1131C7.4512 15.2031 10.0352 12.8511 13.2342 12.8511C15.6682 12.8511 17.6502 14.2321 18.9492 16.7211C19.2772 17.3491 19.6332 17.5681 20.3852 17.5681C23.9392 17.5681 25.7172 19.5371 25.7172 21.9711C25.7172 24.3221 23.8852 26.1541 21.2732 26.1541ZM37.4062 15.9691H40.0312C40.8102 15.9691 41.4532 15.3531 41.4532 14.5741C41.4532 13.7951 40.8102 13.1521 40.0312 13.1521H37.4062C36.6402 13.1521 35.9842 13.7951 35.9842 14.5741C35.9842 15.3531 36.6402 15.9691 37.4062 15.9691ZM35.2052 24.8691C35.7522 25.4161 36.6542 25.4161 37.1872 24.8691C37.7342 24.3361 37.7212 23.4331 37.1742 22.8871L35.3282 21.0141C34.7952 20.4671 33.8792 20.4801 33.3322 21.0141C32.7852 21.5601 32.7992 22.4631 33.3462 23.0101ZM17.1722 35.8201L18.9082 32.8121C19.1952 32.3201 19.0582 31.7191 18.5532 31.4321C18.0472 31.1311 17.4862 31.3081 17.1852 31.8281L15.4492 34.8361C15.1622 35.3141 15.2852 35.9161 15.7912 36.2171C16.2972 36.4901 16.8982 36.2991 17.1722 35.8201ZM6.2892 35.8201L8.0252 32.8261C8.3122 32.3341 8.1762 31.7191 7.6702 31.4321C7.1642 31.1441 6.6032 31.3221 6.3032 31.8421L4.5662 34.8501C4.2792 35.3281 4.4022 35.9301 4.9082 36.2171C5.4142 36.5041 6.0152 36.3121 6.2892 35.8201ZM21.4782 39.6481L23.2152 36.6541C23.5022 36.1621 23.3652 35.5601 22.8592 35.2601C22.3532 34.9731 21.7932 35.1501 21.4922 35.6701L19.7562 38.6781C19.4692 39.1561 19.5922 39.7581 20.0972 40.0451C20.6032 40.3321 21.2052 40.1411 21.4782 39.6481ZM10.5962 39.6621L12.3322 36.6681C12.6192 36.1621 12.4822 35.5601 11.9762 35.2731C11.4712 34.9861 10.9102 35.1641 10.6092 35.6701L8.8732 38.6911C8.5862 39.1701 8.7092 39.7581 9.2152 40.0581C9.7212 40.3461 10.3222 40.1411 10.5962 39.6621Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.341796875 41.174571154079835"
          className={className}
        >
          <path
            d="              M27.5759 5.578C28.4379 5.578 29.1349 4.854 29.1349 4.006V1.572C29.1349 0.711 28.4379 0 27.5759 0C26.7149 0 26.0179 0.711 26.0179 1.572V4.006C26.0179 4.854 26.7149 5.578 27.5759 5.578ZM18.8669 8.258C19.4829 8.873 20.4809 8.887 21.0819 8.285C21.6699 7.684 21.6559 6.699 21.0549 6.07L19.3459 4.334C18.7579 3.719 17.7329 3.732 17.1309 4.334C16.5289 4.936 16.5429 5.92 17.1449 6.522ZM34.0839 8.285C34.6859 8.887 35.6969 8.873 36.2989 8.272L38.0219 6.549C38.6369 5.947 38.6369 4.936 38.0349 4.348C37.4339 3.746 36.4489 3.746 35.8339 4.361L34.0979 6.07C33.4829 6.672 33.4959 7.697 34.0839 8.285ZM6.6579 30.147H21.7109C26.0859 30.147 29.4899 26.811 29.4899 22.504C29.4899 22.176 29.4629 21.861 29.4359 21.547C32.4569 20.768 34.6719 18.088 34.6719 14.793C34.6719 10.855 31.5269 7.711 27.6169 7.711C24.2269 7.711 21.4509 9.994 20.6989 13.111C18.9769 11.102 16.5289 10.035 13.5629 10.035C8.7769 10.035 4.8259 13.453 4.0739 18.184C1.5859 18.99 -0.0001 21.178 -0.0001 23.885C-0.0001 27.522 2.7889 30.147 6.6579 30.147ZM23.7619 14.738C23.7619 12.619 25.4569 10.91 27.6039 10.91C29.7229 10.91 31.4319 12.619 31.4319 14.738C31.4319 16.598 30.1189 18.143 28.3969 18.484C27.3849 16.816 25.7579 15.586 23.7759 15.066C23.7619 14.957 23.7619 14.848 23.7619 14.738ZM38.3359 16.324H40.7699C41.6449 16.324 42.3419 15.641 42.3419 14.779C42.3419 13.918 41.6449 13.221 40.7699 13.221H38.3359C37.4749 13.221 36.7499 13.918 36.7499 14.779C36.7499 15.641 37.4749 16.324 38.3359 16.324ZM6.7539 26.537C4.6619 26.537 3.6229 25.443 3.6229 23.926C3.6229 22.586 4.4709 21.547 6.3579 21.068C7.1369 20.863 7.3419 20.508 7.4649 19.729C8.0389 15.764 10.4729 13.631 13.5629 13.631C15.8869 13.631 17.8279 14.971 19.1409 17.432C19.4829 18.074 19.8379 18.307 20.6449 18.307C24.2129 18.307 25.8669 20.18 25.8669 22.559C25.8669 24.814 24.1719 26.537 21.6149 26.537ZM35.8199 25.211C36.4359 25.826 37.4199 25.826 38.0219 25.225C38.6229 24.637 38.6099 23.652 38.0079 23.023L36.2989 21.287C35.7109 20.672 34.6719 20.686 34.0699 21.287C33.4829 21.889 33.4959 22.887 34.0979 23.488ZM17.5549 36.764L19.2639 33.811C19.5779 33.277 19.4279 32.607 18.8809 32.279C18.3199 31.965 17.7189 32.17 17.3769 32.731L15.6679 35.697C15.3669 36.217 15.4899 36.873 16.0369 37.201C16.5979 37.516 17.2539 37.283 17.5549 36.764ZM6.6719 36.764L8.3809 33.811C8.6819 33.277 8.5449 32.607 7.9979 32.279C7.4379 31.965 6.8219 32.17 6.4939 32.731L4.7849 35.697C4.4709 36.217 4.5939 36.887 5.1539 37.201C5.7149 37.516 6.3709 37.297 6.6719 36.764ZM21.8749 40.592L23.5839 37.639C23.8989 37.106 23.7619 36.436 23.2009 36.107C22.6409 35.793 22.0389 35.998 21.6969 36.559L19.9879 39.525C19.6879 40.045 19.8109 40.715 20.3709 41.029C20.9179 41.344 21.5739 41.111 21.8749 40.592ZM10.9919 40.592L12.7009 37.639C13.0159 37.106 12.8649 36.436 12.3189 36.121C11.7579 35.793 11.1559 35.998 10.8149 36.572L9.1059 39.525C8.8049 40.045 8.9279 40.715 9.4749 41.029C10.0349 41.344 10.6919 41.125 10.9919 40.592Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.40234375 38.07835810551502"
          className={className}
        >
          <path
            d="              M25.4295 5.031C25.9085 5.031 26.2915 4.635 26.2915 4.17V0.848C26.2915 0.383 25.9085 0 25.4295 0C24.9645 0 24.5685 0.383 24.5685 0.848V4.17C24.5685 4.635 24.9645 5.031 25.4295 5.031ZM17.8965 7.67C18.2385 8.012 18.7985 7.998 19.1135 7.67C19.4275 7.342 19.4415 6.795 19.1135 6.467L16.7485 4.102C16.4065 3.76 15.8735 3.773 15.5445 4.102C15.2165 4.43 15.2035 4.977 15.5445 5.305ZM31.7465 7.67C32.0745 7.998 32.6345 8.012 32.9625 7.67L35.3145 5.305C35.6565 4.977 35.6425 4.43 35.3145 4.102C34.9865 3.773 34.4535 3.76 34.1115 4.102L31.7465 6.467C31.4185 6.795 31.4315 7.342 31.7465 7.67ZM5.5785 27.371H20.4665C24.3225 27.371 27.3165 24.459 27.3165 20.727C27.3165 20.631 27.3165 20.535 27.3165 20.439C30.0785 19.551 32.0465 16.967 32.0465 13.986C32.0465 10.295 29.1075 7.342 25.4165 7.342C22.3125 7.342 19.7425 9.447 19.0035 12.318C17.3905 10.404 15.1345 9.256 12.4555 9.256C8.0115 9.256 4.3345 12.756 3.8965 17.227C1.6265 17.896 0.0005 19.783 0.0005 22.285C0.0005 25.184 2.1875 27.371 5.5785 27.371ZM20.3575 13.986C20.3575 11.129 22.5855 8.9 25.4165 8.9C28.2595 8.9 30.4885 11.129 30.4885 13.986C30.4885 16.201 29.0805 18.143 27.0565 18.894C26.2505 16.16 23.6385 14.246 20.3575 14.178C20.3575 14.109 20.3575 14.055 20.3575 13.986ZM5.5505 25.703C3.0355 25.703 1.6545 24.199 1.6545 22.312C1.6545 20.658 2.7075 19.305 4.7575 18.73C5.3185 18.58 5.5095 18.348 5.5505 17.801C5.8515 13.877 8.8865 10.924 12.4555 10.924C15.3805 10.924 17.5415 12.592 18.8265 15.148C19.0725 15.641 19.3595 15.805 19.9335 15.805C23.4335 15.805 25.6485 18.047 25.6485 20.781C25.6485 23.502 23.4065 25.703 20.4945 25.703ZM35.2185 14.834H38.5545C39.0195 14.834 39.4025 14.451 39.4025 13.986C39.4025 13.508 39.0195 13.125 38.5545 13.125H35.2185C34.7535 13.125 34.3575 13.508 34.3575 13.986C34.3575 14.451 34.7535 14.834 35.2185 14.834ZM34.1115 23.885C34.4535 24.227 34.9865 24.213 35.3145 23.885C35.6425 23.543 35.6565 23.01 35.3145 22.682L32.9495 20.316C32.6215 20.002 32.0745 19.988 31.7465 20.316C31.4185 20.644 31.4185 21.205 31.7465 21.533ZM16.0785 33.865L18.0055 30.529C18.2245 30.174 18.1155 29.805 17.7875 29.6C17.4595 29.422 17.0895 29.518 16.8715 29.873L14.9435 33.223C14.7385 33.564 14.8345 33.947 15.1755 34.139C15.5035 34.33 15.8865 34.207 16.0785 33.865ZM5.1955 33.879L7.1235 30.543C7.3415 30.187 7.2325 29.805 6.9045 29.613C6.5765 29.422 6.2075 29.531 5.9885 29.887L4.0605 33.236C3.8695 33.578 3.9515 33.961 4.2935 34.152C4.6215 34.33 5.0035 34.221 5.1955 33.879ZM20.3845 37.707L22.3125 34.371C22.5175 34.016 22.4085 33.633 22.0935 33.441C21.7515 33.25 21.3825 33.359 21.1775 33.715L19.2365 37.064C19.0445 37.406 19.1265 37.789 19.4685 37.98C19.7965 38.172 20.1935 38.049 20.3845 37.707ZM9.5015 37.721L11.4295 34.385C11.6345 34.029 11.5395 33.646 11.2105 33.455C10.8825 33.264 10.5005 33.373 10.2945 33.728L8.3535 37.078C8.1625 37.406 8.2575 37.789 8.5855 37.994C8.9145 38.172 9.3105 38.062 9.5015 37.721Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.345703125 38.98432072221736"
          className={className}
        >
          <path
            d="              M26.0588 5.3049C26.7288 5.3049 27.2888 4.7309 27.2888 4.0739V1.2309C27.2888 0.5609 26.7288 -0.0001 26.0588 -0.0001C25.3748 -0.0001 24.8148 0.5609 24.8148 1.2309V4.0739C24.8148 4.7309 25.3748 5.3049 26.0588 5.3049ZM17.9378 7.9429C18.4298 8.4359 19.2228 8.4359 19.6878 7.9569C20.1528 7.4789 20.1658 6.6989 19.6878 6.2209L17.6778 4.1969C17.1988 3.7189 16.4058 3.7189 15.9418 4.1969C15.4628 4.6759 15.4628 5.4689 15.9418 5.9339ZM32.4158 7.9569C32.8808 8.4359 33.6878 8.4359 34.1658 7.9569L36.1758 5.9469C36.6538 5.4689 36.6538 4.6759 36.1758 4.1969C35.6968 3.7329 34.9178 3.7329 34.4398 4.2109L32.4158 6.2209C31.9378 6.6989 31.9508 7.4789 32.4158 7.9569ZM6.0018 28.2189H20.8498C24.9098 28.2189 28.0548 25.1429 28.0548 21.1919C28.0548 21.0819 28.0548 20.9729 28.0408 20.8769C30.8578 20.0159 32.8948 17.4039 32.8948 14.3149C32.8948 10.5139 29.8598 7.4649 26.0588 7.4649C22.9278 7.4649 20.3298 9.5289 19.4958 12.3589C17.8278 10.4589 15.5038 9.3789 12.8108 9.3789C8.2168 9.3789 4.4028 12.8519 3.8828 17.4039C1.5588 18.1429 -0.0002 20.1659 -0.0002 22.6949C-0.0002 25.9079 2.4338 28.2189 6.0018 28.2189ZM26.0588 9.7619C28.6018 9.7619 30.5978 11.7579 30.5978 14.3009C30.5978 16.2969 29.3398 17.9919 27.5758 18.6209C26.6328 16.2289 24.3628 14.5329 21.5198 14.2459C21.5198 11.7579 23.5158 9.7619 26.0588 9.7619ZM5.9748 25.6899C3.7188 25.6899 2.5288 24.4179 2.5288 22.7499C2.5288 21.3279 3.3768 20.1109 5.3598 19.5779C6.0428 19.4009 6.2758 19.0859 6.3438 18.3749C6.7268 14.5199 9.4748 11.8949 12.8108 11.8949C15.3948 11.8949 17.4178 13.3299 18.7028 15.8589C19.0038 16.4609 19.3598 16.6659 20.0698 16.6659C23.6108 16.6659 25.5258 18.7439 25.5258 21.2459C25.5258 23.7209 23.5428 25.6899 20.8628 25.6899ZM36.2848 15.5449H39.1148C39.7988 15.5449 40.3458 14.9979 40.3458 14.3149C40.3458 13.6309 39.7988 13.0839 39.1148 13.0839H36.2848C35.6148 13.0839 35.0408 13.6309 35.0408 14.3149C35.0408 14.9979 35.6148 15.5449 36.2848 15.5449ZM34.4398 24.4449C34.9178 24.9239 35.6968 24.9099 36.1758 24.4319C36.6408 23.9669 36.6408 23.1739 36.1618 22.7089L34.1528 20.6859C33.6738 20.2209 32.8948 20.2209 32.4158 20.6859C31.9378 21.1639 31.9378 21.9569 32.4158 22.4359ZM16.7068 34.6719L18.4708 31.6099C18.7308 31.1719 18.5938 30.6389 18.1558 30.3929C17.7048 30.1329 17.1988 30.2829 16.9398 30.7349L15.1618 33.8109C14.9158 34.2349 15.0258 34.7539 15.4898 35.0139C15.9278 35.2599 16.4608 35.0959 16.7068 34.6719ZM5.8238 34.6859L7.5878 31.6229C7.8478 31.1859 7.7108 30.6519 7.2738 30.3929C6.8218 30.1469 6.3298 30.2969 6.0568 30.7479L4.2788 33.8239C4.0328 34.2479 4.1558 34.7679 4.6078 35.0269C5.0448 35.2739 5.5778 35.1099 5.8238 34.6859ZM20.9858 38.5139L22.7498 35.4649C23.0238 35.0139 22.8868 34.4939 22.4358 34.2349C21.9978 33.9749 21.4918 34.1249 21.2188 34.5759L19.4548 37.6519C19.1948 38.0759 19.3188 38.5959 19.7698 38.8559C20.2068 39.1019 20.7398 38.9509 20.9858 38.5139ZM10.1168 38.5269L11.8808 35.4649C12.1408 35.0269 12.0038 34.5079 11.5668 34.2479C11.1148 33.9879 10.6098 34.1389 10.3498 34.5899L8.5718 37.6659C8.3258 38.0899 8.4358 38.6099 8.9008 38.8689C9.3378 39.1149 9.8708 38.9509 10.1168 38.5269Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.73046875 38.312158829787236"
          className={className}
        >
          <path
            d="              M25.5802 5.2231C26.2092 5.2231 26.7152 4.7031 26.7152 4.0881V1.1351C26.7152 0.5061 26.2092 0.0001 25.5802 0.0001C24.9512 0.0001 24.4452 0.5061 24.4452 1.1351V4.0881C24.4452 4.7031 24.9512 5.2231 25.5802 5.2231ZM17.6502 7.8611C18.1012 8.3121 18.8402 8.2991 19.2642 7.8611C19.6872 7.4241 19.7012 6.7131 19.2642 6.2751L17.1582 4.1561C16.7212 3.7191 16.0102 3.7191 15.5722 4.1561C15.1352 4.5941 15.1212 5.3181 15.5722 5.7691ZM31.8962 7.8611C32.3202 8.2991 33.0582 8.3121 33.5102 7.8611L35.6012 5.7691C36.0392 5.3181 36.0392 4.5941 35.6012 4.1561C35.1642 3.7191 34.4532 3.7191 34.0152 4.1561L31.8962 6.2751C31.4592 6.7131 31.4722 7.4241 31.8962 7.8611ZM5.7972 27.6311H20.5902C24.5412 27.6311 27.6172 24.6371 27.6172 20.7811C27.6172 20.7541 27.6172 20.7131 27.6172 20.6851C30.3652 19.7971 32.3342 17.2131 32.3342 14.1781C32.3342 10.4181 29.3402 7.3961 25.5802 7.3961C22.5312 7.3961 19.9742 9.3791 19.1272 12.1411C17.4722 10.2671 15.1892 9.1741 12.5782 9.1741C8.0532 9.1741 4.2652 12.6741 3.8142 17.1581C1.5452 17.8831 0.0002 19.8511 0.0002 22.3401C0.0002 25.4161 2.3242 27.6311 5.7972 27.6311ZM25.5802 9.4061C28.2462 9.4061 30.3382 11.4981 30.3382 14.1781C30.3382 16.2281 29.0942 17.9781 27.2752 18.6891C26.4142 16.0641 23.9392 14.2191 20.8222 14.0271C20.9042 11.4161 22.9552 9.4061 25.5802 9.4061ZM5.7422 25.4431C3.4182 25.4431 2.1872 24.1031 2.1872 22.3941C2.1872 20.9451 3.0352 19.6601 5.0452 19.1271C5.7012 18.9491 5.9472 18.6481 6.0022 17.9651C6.3162 14.1371 9.1602 11.3751 12.5782 11.3751C15.2302 11.3751 17.2952 12.8241 18.5662 15.3811C18.8672 15.9691 19.1952 16.1741 19.8922 16.1741C23.4332 16.1741 25.4162 18.2931 25.4162 20.8501C25.4162 23.3921 23.3382 25.4431 20.6312 25.4431ZM35.6422 15.3121H38.6092C39.2242 15.3121 39.7302 14.8071 39.7302 14.1781C39.7302 13.5491 39.2242 13.0431 38.6092 13.0431H35.6422C35.0412 13.0431 34.5082 13.5491 34.5082 14.1781C34.5082 14.8071 35.0412 15.3121 35.6422 15.3121ZM34.0152 24.2131C34.4532 24.6501 35.1642 24.6371 35.6012 24.1991C36.0392 23.7621 36.0392 23.0371 35.6012 22.6131L33.4822 20.5081C33.0452 20.0841 32.3342 20.0701 31.8962 20.5081C31.4592 20.9451 31.4592 21.6701 31.8962 22.1071ZM16.4472 34.0291L18.2242 30.9391C18.4712 30.5291 18.3342 30.0511 17.9242 29.8051C17.5142 29.5721 17.0492 29.6951 16.8032 30.1191L15.0122 33.2361C14.7792 33.6191 14.8892 34.0981 15.3122 34.3441C15.7222 34.5761 16.2152 34.4261 16.4472 34.0291ZM5.5642 34.0431L7.3422 30.9531C7.5882 30.5431 7.4652 30.0641 7.0552 29.8181C6.6312 29.5861 6.1662 29.7091 5.9202 30.1331L4.1292 33.2501C3.8962 33.6331 4.0192 34.1111 4.4302 34.3571C4.8402 34.5901 5.3322 34.4391 5.5642 34.0431ZM20.7132 37.8711L22.5042 34.7951C22.7502 34.3711 22.6132 33.8931 22.2032 33.6601C21.7932 33.4141 21.3282 33.5511 21.0682 33.9751L19.2772 37.0781C19.0452 37.4751 19.1682 37.9531 19.5922 38.1851C19.9882 38.4181 20.4942 38.2811 20.7132 37.8711ZM9.8442 37.8851L11.6212 34.8091C11.8672 34.3851 11.7302 33.9061 11.3342 33.6741C10.9102 33.4281 10.4452 33.5641 10.1992 33.9881L8.4082 37.0921C8.1762 37.4881 8.2992 37.9671 8.7092 38.1991C9.1192 38.4321 9.6112 38.2951 9.8442 37.8851Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.82421875 39.49537396260299"
          className={className}
        >
          <path
            d="              M26.4145 5.3726C27.1385 5.3726 27.7265 4.7576 27.7265 4.0466V1.3126C27.7265 0.5876 27.1385 -0.0004 26.4145 -0.0004C25.6895 -0.0004 25.1015 0.5876 25.1015 1.3126V4.0466C25.1015 4.7576 25.6895 5.3726 26.4145 5.3726ZM18.1565 8.0116C18.6755 8.5316 19.5235 8.5316 20.0295 8.0256C20.5215 7.5196 20.5215 6.6996 20.0155 6.1796L18.0745 4.2246C17.5685 3.7046 16.7205 3.7186 16.2145 4.2246C15.7085 4.7306 15.7225 5.5646 16.2285 6.0706ZM32.8125 8.0256C33.3045 8.5316 34.1665 8.5316 34.6855 8.0256L36.6135 6.0836C37.1195 5.5776 37.1195 4.7306 36.6135 4.2246C36.1075 3.7186 35.2875 3.7326 34.7675 4.2386L32.8265 6.1796C32.3065 6.6856 32.3205 7.5336 32.8125 8.0256ZM6.1525 28.6696H21.0545C25.1835 28.6696 28.3965 25.5386 28.3965 21.4926C28.3965 21.3276 28.3965 21.1776 28.3825 21.0136C31.2405 20.1796 33.3185 17.5686 33.3185 14.4236C33.3185 10.5956 30.2555 7.5196 26.4275 7.5196C23.2425 7.5196 20.5895 9.6246 19.7835 12.5366C18.1015 10.6096 15.7495 9.5296 12.9885 9.5296C8.3535 9.5296 4.5115 12.9886 3.9235 17.5816C1.5585 18.3336 -0.0005 20.3986 -0.0005 22.9686C-0.0005 26.2906 2.5155 28.6696 6.1525 28.6696ZM22.0525 14.4106C22.0525 11.9496 23.9805 10.0216 26.4275 10.0216C28.8615 10.0216 30.7895 11.9496 30.7895 14.4106C30.7895 16.3516 29.5445 18.0056 27.7945 18.5796C26.7965 16.3516 24.6775 14.7796 22.0525 14.4106ZM6.1665 25.8946C3.9375 25.8946 2.7895 24.6506 2.7895 23.0236C2.7895 21.6156 3.6365 20.4396 5.5915 19.9196C6.3025 19.7426 6.5355 19.4136 6.6175 18.6896C7.0415 14.8066 9.7205 12.3046 12.9885 12.3046C15.5175 12.3046 17.5135 13.7126 18.8125 16.2286C19.1265 16.8436 19.4685 17.0486 20.2075 17.0486C23.7615 17.0486 25.6075 19.0726 25.6075 21.5466C25.6075 23.9806 23.6935 25.8946 21.0415 25.8946ZM36.7635 15.7226H39.5115C40.2365 15.7226 40.8245 15.1346 40.8245 14.4236C40.8245 13.6996 40.2365 13.1116 39.5115 13.1116H36.7635C36.0525 13.1116 35.4515 13.6996 35.4515 14.4236C35.4515 15.1346 36.0525 15.7226 36.7635 15.7226ZM34.7675 24.6226C35.2875 25.1286 36.1075 25.1286 36.6135 24.6226C37.1195 24.1176 37.1055 23.2836 36.5995 22.7776L34.6585 20.8226C34.1665 20.3296 33.3185 20.3166 32.8125 20.8226C32.3065 21.3276 32.3205 22.1756 32.8265 22.6816ZM16.9125 35.1506L18.6625 32.1286C18.9355 31.6636 18.7985 31.1036 18.3335 30.8296C17.8555 30.5566 17.3355 30.7206 17.0485 31.1996L15.2855 34.2476C15.0255 34.6996 15.1485 35.2456 15.6135 35.5196C16.0915 35.7926 16.6525 35.6156 16.9125 35.1506ZM6.0295 35.1636L7.7795 32.1426C8.0525 31.6776 7.9165 31.1176 7.4515 30.8436C6.9725 30.5706 6.4535 30.7346 6.1665 31.2126L4.4025 34.2616C4.1425 34.6996 4.2655 35.2596 4.7445 35.5336C5.2085 35.7926 5.7695 35.6286 6.0295 35.1636ZM21.2055 38.9926L22.9555 35.9706C23.2285 35.5056 23.0915 34.9456 22.6265 34.6716C22.1485 34.3986 21.6285 34.5626 21.3415 35.0406L19.5785 38.0896C19.3185 38.5406 19.4415 39.0876 19.9195 39.3616C20.3845 39.6346 20.9455 39.4566 21.2055 38.9926ZM10.3225 39.0056L12.0725 35.9846C12.3455 35.5196 12.2085 34.9586 11.7445 34.6856C11.2655 34.4116 10.7465 34.5766 10.4585 35.0546L8.6955 38.1036C8.4355 38.5406 8.5585 39.1016 9.0375 39.3746C9.5015 39.6346 10.0625 39.4566 10.3225 39.0056Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.978515625 37.77683557796913"
          className={className}
        >
          <path
            d="              M25.2384 4.7856C25.4984 4.7856 25.7304 4.5526 25.7304 4.3066V0.4786C25.7304 0.2186 25.4984 -0.0004 25.2384 -0.0004C24.9644 -0.0004 24.7324 0.2186 24.7324 0.4786V4.3066C24.7324 4.5526 24.9644 4.7856 25.2384 4.7856ZM18.2244 7.4236C18.4164 7.6156 18.7304 7.6156 18.9214 7.4236C19.0994 7.2326 19.0994 6.9176 18.9214 6.7266L16.2144 4.0336C16.0094 3.8276 15.7094 3.8416 15.5174 4.0336C15.3264 4.2106 15.3124 4.5256 15.5174 4.7306ZM31.5544 7.4236C31.7324 7.6156 32.0604 7.6156 32.2524 7.4236L34.9454 4.7306C35.1504 4.5256 35.1364 4.2106 34.9454 4.0336C34.7534 3.8416 34.4534 3.8276 34.2484 4.0336L31.5544 6.7266C31.3634 6.9176 31.3634 7.2326 31.5544 7.4236ZM5.3044 27.0296H20.3024C24.0214 27.0296 26.9334 24.2266 26.9334 20.6716C26.9334 20.4936 26.9204 20.3166 26.9064 20.1386C29.6954 19.2366 31.6644 16.6656 31.6644 13.7406C31.6644 10.1586 28.7934 7.2866 25.2244 7.2866C22.0394 7.2866 19.4144 9.5566 18.8804 12.5916C17.2954 10.5956 15.0804 9.3656 12.2914 9.3656C7.9704 9.3656 4.4024 12.8786 4.0054 17.3356C1.7504 17.9376 0.0004 19.7146 0.0004 22.2166C0.0004 24.8826 2.0094 27.0296 5.3044 27.0296ZM20.0434 14.3966C19.9474 14.2186 19.8514 14.0406 19.7424 13.8636C19.7424 13.8226 19.7424 13.7816 19.7424 13.7406C19.7424 10.6636 22.1484 8.2436 25.2244 8.2436C28.2874 8.2436 30.6934 10.6636 30.6934 13.7406C30.6934 16.1876 29.0804 18.3746 26.7554 19.1816C26.0454 16.3926 23.3924 14.4236 20.0434 14.3966ZM5.2914 26.0586C2.5154 26.0586 0.9704 24.3496 0.9704 22.2306C0.9704 20.3026 2.2694 18.8536 4.3884 18.2246C4.8124 18.1156 4.9354 17.9516 4.9624 17.5816C5.2364 13.5626 8.5314 10.3356 12.2914 10.3356C15.5724 10.3356 17.8824 12.2906 19.1684 14.8476C19.3594 15.2166 19.5644 15.3396 20.0024 15.3396C23.4614 15.3396 25.9624 17.7186 25.9624 20.7126C25.9624 23.6526 23.4744 26.0586 20.3024 26.0586ZM34.6444 14.2326H38.4724C38.7594 14.2326 38.9784 14.0136 38.9784 13.7406C38.9784 13.4666 38.7594 13.2476 38.4724 13.2476H34.6444C34.3714 13.2476 34.1524 13.4666 34.1524 13.7406C34.1524 14.0136 34.3714 14.2326 34.6444 14.2326ZM34.2484 23.4746C34.4534 23.6796 34.7534 23.6526 34.9454 23.4746C35.1364 23.2836 35.1504 22.9826 34.9454 22.7776L32.2384 20.0706C32.0604 19.8926 31.7464 19.8926 31.5544 20.0706C31.3634 20.2616 31.3634 20.5896 31.5544 20.7676ZM15.6134 33.6736L17.7324 29.9956C17.8964 29.7366 17.8284 29.4766 17.5954 29.3536C17.3904 29.2306 17.1444 29.2986 16.9804 29.5726L14.8474 33.2366C14.7114 33.4956 14.7524 33.7556 14.9844 33.8786C15.2034 34.0156 15.4624 33.9336 15.6134 33.6736ZM4.7164 33.6736L6.8494 30.0096C7.0134 29.7366 6.9454 29.4906 6.7124 29.3536C6.5074 29.2306 6.2484 29.2986 6.0974 29.5726L3.9644 33.2366C3.8144 33.4956 3.8694 33.7556 4.1014 33.8926C4.3204 34.0156 4.5804 33.9336 4.7164 33.6736ZM19.9334 37.5016L22.0664 33.8246C22.2304 33.5646 22.1624 33.3046 21.9294 33.1816C21.7244 33.0586 21.4644 33.1266 21.3144 33.4006L19.1814 37.0646C19.0314 37.3246 19.0864 37.5836 19.3184 37.7066C19.5374 37.8436 19.7964 37.7616 19.9334 37.5016ZM9.0504 37.5016L11.1834 33.8376C11.3344 33.5646 11.2654 33.3186 11.0464 33.1816C10.8284 33.0586 10.5824 33.1266 10.4184 33.4006L8.2984 37.0646C8.1484 37.3246 8.2034 37.5836 8.4354 37.7206C8.6544 37.8436 8.9144 37.7616 9.0504 37.5016Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.759765625 37.62119878158832"
          className={className}
        >
          <path
            d="              M25.1427 4.6616C25.3067 4.6616 25.4567 4.5116 25.4567 4.3616V0.2866C25.4567 0.1226 25.3067 -0.0004 25.1427 -0.0004C24.9787 -0.0004 24.8277 0.1226 24.8277 0.2866V4.3616C24.8277 4.5116 24.9787 4.6616 25.1427 4.6616ZM18.3887 7.3006C18.5117 7.4106 18.7027 7.4106 18.8257 7.3006C18.9357 7.1776 18.9357 6.9726 18.8257 6.8636L15.9547 3.9926C15.8187 3.8556 15.6267 3.8696 15.5177 3.9926C15.3947 4.1016 15.3807 4.2796 15.5177 4.4156ZM31.4587 7.3006C31.5817 7.4106 31.7737 7.4106 31.8967 7.3006L34.7677 4.4156C34.9047 4.2796 34.8767 4.1016 34.7677 3.9926C34.6447 3.8696 34.4667 3.8556 34.3297 3.9926L31.4587 6.8636C31.3357 6.9726 31.3357 7.1776 31.4587 7.3006ZM5.1677 26.8516H20.2207C23.8847 26.8516 26.7417 24.1036 26.7417 20.6306C26.7417 20.4116 26.7287 20.1936 26.7007 19.9746C29.5037 19.0856 31.4727 16.5156 31.4727 13.6176C31.4727 10.0766 28.6427 7.2456 25.1287 7.2456C21.8887 7.2456 19.2497 9.6246 18.8397 12.7556C17.2677 10.7046 15.0667 9.4196 12.2087 9.4196C7.9567 9.4196 4.4567 12.9336 4.0737 17.3766C1.8187 17.9516 -0.0003 19.6736 -0.0003 22.1896C-0.0003 24.7326 1.9277 26.8516 5.1677 26.8516ZM19.9477 14.5056C19.7827 14.1916 19.6187 13.9046 19.4417 13.6176C19.4417 10.4316 21.9437 7.9026 25.1287 7.9026C28.3147 7.9026 30.8167 10.4316 30.8167 13.6176C30.8167 16.1736 29.0937 18.4846 26.5917 19.3316C25.9627 16.5156 23.3107 14.5196 19.9477 14.5056ZM5.1817 26.2366C2.2697 26.2366 0.6157 24.4176 0.6157 22.1896C0.6157 20.1116 2.0647 18.6076 4.2107 17.9646C4.5527 17.8556 4.6617 17.7456 4.6757 17.4726C4.9357 13.3986 8.3537 10.0356 12.2087 10.0356C15.6817 10.0356 18.0607 12.1266 19.3597 14.6976C19.5097 14.9976 19.6737 15.1076 20.0427 15.1076C23.4747 15.1076 26.1267 17.5546 26.1267 20.6716C26.1267 23.7346 23.5297 26.2366 20.2207 26.2366ZM34.3577 13.9176H38.4457C38.6227 13.9176 38.7597 13.7816 38.7597 13.6176C38.7597 13.4536 38.6227 13.3166 38.4457 13.3166H34.3577C34.1937 13.3166 34.0567 13.4536 34.0567 13.6176C34.0567 13.7816 34.1937 13.9176 34.3577 13.9176ZM34.3297 23.2556C34.4667 23.3926 34.6447 23.3786 34.7677 23.2556C34.8767 23.1466 34.9047 22.9546 34.7677 22.8186L31.8967 19.9476C31.7737 19.8246 31.5817 19.8246 31.4587 19.9476C31.3357 20.0566 31.3357 20.2616 31.4587 20.3846ZM4.4847 33.5646L6.7127 29.7226C6.8497 29.5036 6.7947 29.3126 6.6307 29.2166C6.4807 29.1346 6.2887 29.1756 6.1527 29.4086L3.9237 33.2366C3.8007 33.4546 3.8417 33.6466 4.0057 33.7556C4.1837 33.8516 4.3617 33.7836 4.4847 33.5646ZM15.3807 33.5646L17.5957 29.7226C17.7327 29.5036 17.6917 29.3126 17.5137 29.2166C17.3637 29.1346 17.1717 29.1756 17.0347 29.4086L14.8207 33.2366C14.6977 33.4546 14.7247 33.6466 14.9027 33.7556C15.0667 33.8516 15.2577 33.7836 15.3807 33.5646ZM8.8317 37.3786L11.0607 33.5506C11.1977 33.3186 11.1427 33.1406 10.9787 33.0316C10.8147 32.9496 10.6367 33.0036 10.4997 33.2226L8.2717 37.0646C8.1487 37.2836 8.1897 37.4746 8.3537 37.5706C8.5317 37.6796 8.7087 37.6116 8.8317 37.3786ZM19.7287 37.3786L21.9437 33.5506C22.0797 33.3186 22.0387 33.1406 21.8617 33.0316C21.7107 32.9496 21.5197 33.0036 21.3827 33.2226L19.1677 37.0646C19.0447 37.2836 19.0727 37.4746 19.2497 37.5706C19.4137 37.6796 19.6057 37.6116 19.7287 37.3786Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}