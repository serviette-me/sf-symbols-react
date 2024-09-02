import { IconProps } from "../../types"

export default function VideoBadgeWaveformIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.890625 29.134765625"
          className={className}
        >
          <path
            d="              M18.457 24.5001H26.072C30.27 24.5001 32.484 22.2851 32.484 18.3751V17.7051L36.367 21.0411C37.406 21.9301 38.309 22.5171 39.32 22.5171C40.797 22.5171 41.891 21.5191 41.891 19.8651V4.9901C41.891 3.3221 40.797 2.3241 39.32 2.3241C38.295 2.3241 37.406 2.9121 36.367 3.8011L32.484 7.1371V6.1111C32.484 2.2151 30.27 0.0001 26.072 0.0001H12.141C7.943 0.0001 5.729 2.2151 5.729 6.1391V13.0571C6.316 12.5231 7.109 12.1951 7.984 12.1951C8.805 12.1951 9.57 12.4961 10.158 12.9751V6.8081C10.158 5.0311 11.143 4.1291 12.879 4.1291H25.334C27.057 4.1291 28.041 5.1821 28.041 6.8081V17.6911C28.041 19.3051 26.988 20.3571 25.293 20.3571H18.457ZM32.484 13.3441V11.4981L37.406 7.6291C37.488 7.5601 37.557 7.5191 37.652 7.5191C37.748 7.5191 37.83 7.5881 37.83 7.7251V17.1311C37.83 17.2541 37.748 17.3361 37.652 17.3361C37.557 17.3361 37.488 17.2811 37.406 17.2131ZM7.971 29.1351C8.504 29.1351 8.941 28.6971 8.941 28.1641V15.6951C8.941 15.1351 8.504 14.7251 7.971 14.7251C7.438 14.7251 7.014 15.1621 7.014 15.6951V28.1641C7.014 28.6971 7.424 29.1351 7.971 29.1351ZM4.457 27.2341C5.018 27.2341 5.441 26.8101 5.441 26.2771V17.5681C5.441 17.0491 5.018 16.6251 4.457 16.6251C3.924 16.6251 3.514 17.0491 3.514 17.5681V26.2771C3.514 26.8241 3.938 27.2341 4.457 27.2341ZM11.471 26.6871C12.018 26.6871 12.428 26.2501 12.428 25.7171V18.1291C12.428 17.5821 11.99 17.1721 11.471 17.1721C10.938 17.1721 10.514 17.5961 10.514 18.1291V25.7171C10.514 26.2501 10.938 26.6871 11.471 26.6871ZM14.971 24.8961C15.504 24.8961 15.914 24.4591 15.914 23.9261V19.9331C15.914 19.3731 15.49 18.9631 14.971 18.9631C14.41 18.9631 14 19.4001 14 19.9331V23.9261C14 24.4731 14.41 24.8961 14.971 24.8961ZM0.957 24.1991C1.504 24.1991 1.941 23.7621 1.941 23.2281V20.6311C1.941 20.0981 1.504 19.6601 0.957 19.6601C0.438 19.6601 0 20.0981 0 20.6311V23.2281C0 23.7621 0.438 24.1991 0.957 24.1991Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.87890625 27.986328125"
          className={className}
        >
          <path
            d="              M17.5138 23.4882H25.8538C29.6268 23.4882 31.7328 21.4102 31.7328 17.7872V16.5152L36.2578 20.3712C37.0508 21.0412 37.8028 21.4922 38.5958 21.4922C39.9218 21.4922 40.8788 20.5492 40.8788 19.0862V4.5802C40.8788 3.1032 39.9218 2.1742 38.5958 2.1742C37.7888 2.1742 37.0508 2.6252 36.2578 3.2952L31.7328 7.1362V5.6872C31.7328 2.0782 29.6268 0.0002 25.8538 0.0002H11.7438C8.0668 0.0002 5.8788 2.0782 5.8788 5.7012V12.5102C6.3438 12.1682 6.9318 11.9492 7.5738 11.9492C8.1758 11.9492 8.7358 12.1402 9.2008 12.4412V6.1932C9.2008 4.1292 10.3218 3.0902 12.3048 3.0902H25.2928C27.2758 3.0902 28.4098 4.1972 28.4098 6.1932V17.2812C28.4098 19.2772 27.2478 20.3852 25.2788 20.3852H17.5138ZM31.7328 13.0432V10.6232L37.2968 6.1382C37.3928 6.0562 37.4748 6.0022 37.5698 6.0022C37.7068 6.0022 37.7888 6.0972 37.7888 6.2612V17.4042C37.7888 17.5682 37.7068 17.6642 37.5698 17.6642C37.4748 17.6642 37.3928 17.5952 37.2968 17.5272ZM7.5738 27.9862C8.0528 27.9862 8.4358 27.6032 8.4358 27.1252V15.2032C8.4358 14.7112 8.0528 14.3282 7.5738 14.3282C7.0818 14.3282 6.7128 14.7112 6.7128 15.2032V27.1252C6.7128 27.6172 7.0818 27.9862 7.5738 27.9862ZM10.9238 26.0862C11.4158 26.0862 11.7848 25.7032 11.7848 25.2242V17.0902C11.7848 16.6112 11.4028 16.2282 10.9238 16.2282C10.4448 16.2282 10.0628 16.6112 10.0628 17.0902V25.2242C10.0628 25.7032 10.4448 26.0862 10.9238 26.0862ZM4.2108 25.8672C4.7028 25.8672 5.0998 25.4702 5.0998 24.9922V17.3082C5.0998 16.8442 4.7028 16.4472 4.2108 16.4472C3.7328 16.4472 3.3498 16.8442 3.3498 17.3082V24.9922C3.3498 25.4842 3.7458 25.8672 4.2108 25.8672ZM14.2738 23.8982C14.7658 23.8982 15.1348 23.5292 15.1348 23.0372V19.2772C15.1348 18.7852 14.7658 18.4162 14.2738 18.4162C13.7808 18.4162 13.4118 18.7992 13.4118 19.2772V23.0372C13.4118 23.5292 13.7808 23.8982 14.2738 23.8982ZM0.8478 23.1872C1.3538 23.1872 1.7358 22.8042 1.7358 22.3262V19.9882C1.7358 19.5102 1.3538 19.1132 0.8478 19.1132C0.3828 19.1132 -0.0002 19.5102 -0.0002 19.9882V22.3262C-0.0002 22.8042 0.3828 23.1872 0.8478 23.1872Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.412109375 28.6015625"
          className={className}
        >
          <path
            d="              M18.0196 24.0217H25.9766C29.9686 24.0217 32.1286 21.8747 32.1286 18.1017V17.1587L36.3266 20.7267C37.2426 21.5197 38.0766 22.0387 38.9786 22.0387C40.3866 22.0387 41.4126 21.0687 41.4126 19.4957V4.7987C41.4126 3.2267 40.3866 2.2557 38.9786 2.2557C38.0626 2.2557 37.2426 2.7887 36.3266 3.5687L32.1286 7.1507V5.9197C32.1286 2.1597 29.9686 -0.0003 25.9766 -0.0003H11.9626C8.0116 -0.0003 5.7966 2.1597 5.7966 5.9337V12.7967C6.3436 12.3597 7.0276 12.0857 7.7926 12.0857C8.5036 12.0857 9.1876 12.3317 9.7066 12.7287V6.5217C9.7066 4.6077 10.7596 3.6507 12.6196 3.6507H25.3206C27.1656 3.6507 28.2186 4.7307 28.2186 6.5217V17.4997C28.2186 19.3047 27.1116 20.3847 25.2926 20.3847H18.0196ZM32.1286 13.2067V11.0877L37.3656 6.9317C37.4476 6.8637 37.5296 6.8087 37.6116 6.8087C37.7346 6.8087 37.8166 6.8907 37.8166 7.0407V17.2677C37.8166 17.4047 37.7346 17.4997 37.6116 17.4997C37.5296 17.4997 37.4476 17.4317 37.3656 17.3637ZM7.7796 28.6017C8.2986 28.6017 8.7086 28.1917 8.7086 27.6857V15.4627C8.7086 14.9437 8.2986 14.5467 7.7796 14.5467C7.2736 14.5467 6.8766 14.9567 6.8766 15.4627V27.6857C6.8766 28.1917 7.2736 28.6017 7.7796 28.6017ZM4.3476 26.5917C4.8676 26.5917 5.2776 26.1817 5.2776 25.6757V17.4587C5.2776 16.9527 4.8676 16.5427 4.3476 16.5427C3.8416 16.5427 3.4456 16.9527 3.4456 17.4587V25.6757C3.4456 26.1957 3.8556 26.5917 4.3476 26.5917ZM11.2106 26.4137C11.7306 26.4137 12.1266 26.0037 12.1266 25.4847V17.6507C12.1266 17.1307 11.7166 16.7347 11.2106 16.7347C10.7056 16.7347 10.2946 17.1447 10.2946 17.6507V25.4847C10.2946 26.0037 10.7056 26.4137 11.2106 26.4137ZM14.6426 24.4317C15.1626 24.4317 15.5586 24.0217 15.5586 23.5157V19.6327C15.5586 19.0997 15.1486 18.7027 14.6426 18.7027C14.1226 18.7027 13.7266 19.1267 13.7266 19.6327V23.5157C13.7266 24.0347 14.1226 24.4317 14.6426 24.4317ZM0.9026 23.7347C1.4356 23.7347 1.8456 23.3247 1.8456 22.8047V20.3297C1.8456 19.8247 1.4356 19.4137 0.9026 19.4137C0.4106 19.4137 -0.0004 19.8247 -0.0004 20.3297V22.8047C-0.0004 23.3247 0.4106 23.7347 0.9026 23.7347Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.4296875 26.701171875"
          className={className}
        >
          <path
            d="              M15.5041 22.2983H25.5941C28.7791 22.2983 30.6391 20.4943 30.6391 17.3083V14.9293L36.0661 19.4273C36.5861 19.8513 37.1331 20.1383 37.6801 20.1383C38.7321 20.1383 39.4301 19.3733 39.4301 18.2113V4.1013C39.4301 2.9393 38.7321 2.1733 37.6801 2.1733C37.1331 2.1733 36.5861 2.4613 36.0661 2.8843L30.6391 7.3823V5.0043C30.6391 1.8183 28.7791 0.0003 25.5941 0.0003H10.9511C7.8611 0.0003 5.9061 1.8183 5.9061 5.0043V11.9083C6.1801 11.7983 6.4671 11.7443 6.7811 11.7443C7.0821 11.7443 7.3551 11.7983 7.6011 11.8813V5.2773C7.6011 2.8023 8.8871 1.5863 11.2521 1.5863H25.2931C27.6581 1.5863 28.9431 2.8023 28.9431 5.2773V17.0353C28.9431 19.4963 27.6581 20.7133 25.2931 20.7133H15.5041ZM30.6391 12.9473V9.3653L36.9001 4.2933C37.1051 4.1293 37.2561 4.0193 37.4331 4.0193C37.6661 4.0193 37.8031 4.1973 37.8031 4.5113V17.7873C37.8031 18.1013 37.6661 18.2793 37.4331 18.2793C37.2561 18.2793 37.1051 18.1703 36.9001 18.0193ZM6.7951 26.7013C7.1501 26.7013 7.4371 26.4143 7.4371 26.0583V14.3413C7.4371 13.9723 7.1501 13.6853 6.7951 13.6853C6.4261 13.6853 6.1391 13.9723 6.1391 14.3413V26.0583C6.1391 26.4273 6.4121 26.7013 6.7951 26.7013ZM9.8571 25.2933C10.2261 25.2933 10.5001 25.0063 10.5001 24.6363V15.7223C10.5001 15.3673 10.2261 15.0933 9.8571 15.0933C9.5021 15.0933 9.2151 15.3673 9.2151 15.7223V24.6363C9.2151 25.0063 9.5021 25.2933 9.8571 25.2933ZM3.7191 24.3633C4.0741 24.3633 4.3611 24.0903 4.3611 23.7073V16.6523C4.3611 16.2973 4.0741 15.9963 3.7191 15.9963C3.3501 15.9963 3.0761 16.2973 3.0761 16.6523V23.7073C3.0761 24.0903 3.3501 24.3633 3.7191 24.3633ZM12.9331 22.8593C13.3031 22.8593 13.5761 22.5863 13.5761 22.2163V18.1563C13.5761 17.7873 13.3031 17.5003 12.9331 17.5003C12.5641 17.5003 12.2911 17.8003 12.2911 18.1563V22.2163C12.2911 22.5723 12.5641 22.8593 12.9331 22.8593ZM0.6421 22.1073C1.0121 22.1073 1.2851 21.8343 1.2851 21.4783V18.8943C1.2851 18.5393 1.0121 18.2523 0.6421 18.2523C0.2871 18.2523 0.0001 18.5393 0.0001 18.8943V21.4783C0.0001 21.8343 0.2871 22.1073 0.6421 22.1073Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.22265625 27.26171875"
          className={className}
        >
          <path
            d="              M16.9118 22.8321H25.7308C29.2168 22.8321 31.2538 20.8491 31.2538 17.4041V15.7501L36.1898 19.9331C36.8188 20.4671 37.4888 20.8221 38.1308 20.8221C39.3748 20.8221 40.2228 19.9201 40.2228 18.5801V4.3071C40.2228 2.9671 39.3748 2.0641 38.1308 2.0641C37.4888 2.0641 36.8188 2.4201 36.1898 2.9531L31.2538 7.1371V5.4141C31.2538 1.9821 29.2168 0.0001 25.7308 0.0001H11.4978C8.1348 0.0001 5.9748 1.9821 5.9748 5.4281V12.1411C6.3708 11.9221 6.8358 11.7991 7.3278 11.7991C7.7798 11.7991 8.2168 11.9081 8.5858 12.0991V5.8101C8.5858 3.5411 9.8028 2.4201 11.9488 2.4201H25.2798C27.4258 2.4201 28.6428 3.5681 28.6428 5.8101V17.0211C28.6428 19.2641 27.4118 20.3981 25.2798 20.3981H16.9118ZM31.2538 12.8381V10.0491L37.2148 5.1681C37.3378 5.0721 37.4198 5.0171 37.5298 5.0171C37.6798 5.0171 37.7618 5.1411 37.7618 5.3181V17.5681C37.7618 17.7601 37.6798 17.8691 37.5298 17.8691C37.4198 17.8691 37.3378 17.8011 37.2148 17.7191ZM7.3278 27.2621C7.7798 27.2621 8.1348 26.9061 8.1348 26.4551V14.8891C8.1348 14.4241 7.7798 14.0681 7.3278 14.0681C6.8768 14.0681 6.5218 14.4241 6.5218 14.8891V26.4551C6.5218 26.9201 6.8638 27.2621 7.3278 27.2621ZM10.5688 25.7031C11.0328 25.7031 11.3888 25.3481 11.3888 24.8961V16.4201C11.3888 15.9821 11.0328 15.6271 10.5688 15.6271C10.1308 15.6271 9.7758 15.9821 9.7758 16.4201V24.8961C9.7758 25.3481 10.1308 25.7031 10.5688 25.7031ZM4.0608 24.9781C4.5118 24.9781 4.8668 24.6231 4.8668 24.1581V17.1441C4.8668 16.7071 4.5118 16.3381 4.0608 16.3381C3.6098 16.3381 3.2538 16.7071 3.2538 17.1441V24.1581C3.2538 24.6231 3.6098 24.9781 4.0608 24.9781ZM13.8358 23.2561C14.3008 23.2561 14.6428 22.9141 14.6428 22.4491V18.8531C14.6428 18.4021 14.3008 18.0471 13.8358 18.0471C13.3848 18.0471 13.0298 18.4161 13.0298 18.8531V22.4491C13.0298 22.9141 13.3848 23.2561 13.8358 23.2561ZM0.7928 22.5451C1.2578 22.5451 1.6138 22.1891 1.6138 21.7521V19.5781C1.6138 19.1271 1.2578 18.7711 0.7928 18.7711C0.3558 18.7711 -0.0002 19.1271 -0.0002 19.5781V21.7521C-0.0002 22.1891 0.3558 22.5451 0.7928 22.5451Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.853515625 26.8515625"
          className={className}
        >
          <path
            d="              M16.5707 22.4764H25.6487C28.9847 22.4764 30.9807 20.5354 30.9807 17.1994V15.3264L36.1487 19.7014C36.6957 20.1524 37.2967 20.4664 37.8577 20.4664C39.0607 20.4664 39.8537 19.5784 39.8537 18.3064V4.1704C39.8537 2.8984 39.0607 2.0094 37.8577 2.0094C37.2967 2.0094 36.6957 2.3244 36.1487 2.7754L30.9807 7.1504V5.2634C30.9807 1.9414 28.9847 0.0004 25.6487 0.0004H11.3617C8.1757 0.0004 6.0297 1.9414 6.0297 5.2634V11.9494C6.3847 11.7984 6.7677 11.7164 7.1777 11.7164C7.5467 11.7164 7.9027 11.7854 8.2307 11.9084V5.5914C8.2307 3.2134 9.5017 2.0504 11.7437 2.0504H25.2657C27.4937 2.0504 28.7797 3.2134 28.7797 5.5914V16.8844C28.7797 19.2504 27.4937 20.4124 25.2657 20.4124H16.5707ZM30.9807 12.7284V9.7484L37.1737 4.6344C37.2967 4.5394 37.3787 4.4704 37.5017 4.4704C37.6657 4.4704 37.7347 4.6074 37.7347 4.7984V17.6774C37.7347 17.8694 37.6657 17.9924 37.5017 17.9924C37.3787 17.9924 37.2967 17.9234 37.1737 17.8414ZM7.1777 26.8514C7.6017 26.8514 7.9437 26.5094 7.9437 26.0864V14.7114C7.9437 14.2734 7.6017 13.9314 7.1777 13.9314C6.7407 13.9314 6.4117 14.2734 6.4117 14.7114V26.0864C6.4117 26.5234 6.7267 26.8514 7.1777 26.8514ZM10.3637 25.4844C10.8147 25.4844 11.1567 25.1424 11.1567 24.7184V16.0504C11.1567 15.6274 10.8147 15.2854 10.3637 15.2854C9.9527 15.2854 9.6117 15.6274 9.6117 16.0504V24.7184C9.6117 25.1424 9.9527 25.4844 10.3637 25.4844ZM3.9647 24.4864C4.4027 24.4864 4.7437 24.1444 4.7437 23.7074V17.0624C4.7437 16.6254 4.4027 16.2834 3.9647 16.2834C3.5407 16.2834 3.1997 16.6254 3.1997 17.0624V23.7074C3.1997 24.1444 3.5407 24.4864 3.9647 24.4864ZM13.5897 22.9004C14.0277 22.9004 14.3557 22.5864 14.3557 22.1344V18.6214C14.3557 18.1974 14.0277 17.8554 13.5897 17.8554C13.1527 17.8554 12.8247 18.2114 12.8247 18.6214V22.1344C12.8247 22.5724 13.1527 22.9004 13.5897 22.9004ZM0.7517 22.1894C1.2027 22.1894 1.5317 21.8474 1.5317 21.4234V19.3454C1.5317 18.9214 1.2027 18.5804 0.7517 18.5804C0.3277 18.5804 -0.0003 18.9214 -0.0003 19.3454V21.4234C-0.0003 21.8474 0.3277 22.1894 0.7517 22.1894Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.509765625 27.576171875"
          className={className}
        >
          <path
            d="              M17.1715 23.1195H25.7985C29.4085 23.1195 31.4595 21.0955 31.4595 17.5825V16.0915L36.2305 20.1385C36.9275 20.7265 37.6255 21.1235 38.3355 21.1235C39.6215 21.1235 40.5095 20.2075 40.5095 18.8125V4.4295C40.5095 3.0355 39.6215 2.1195 38.3355 2.1195C37.6255 2.1195 36.9275 2.5155 36.2305 3.1035L31.4595 7.1505V5.5505C31.4595 2.0375 29.4085 -0.0005 25.7985 -0.0005H11.6215C8.1075 -0.0005 5.9475 2.0375 5.9475 5.5505V12.3045C6.3715 12.0315 6.8765 11.8675 7.4375 11.8675C7.9575 11.8675 8.4495 12.0175 8.8595 12.2495V5.9885C8.8595 3.8005 10.0355 2.7205 12.1135 2.7205H25.2935C27.3715 2.7205 28.5465 3.8555 28.5465 5.9885V17.1445C28.5465 19.2775 27.3435 20.3985 25.2935 20.3985H17.1715ZM31.4595 12.9335V10.3085L37.2555 5.5915C37.3655 5.5095 37.4475 5.4555 37.5565 5.4555C37.7075 5.4555 37.7755 5.5645 37.7755 5.7285V17.5135C37.7755 17.6775 37.7075 17.7875 37.5565 17.7875C37.4475 17.7875 37.3655 17.7185 37.2555 17.6505ZM7.4375 27.5765C7.9025 27.5765 8.2715 27.2205 8.2715 26.7555V15.0395C8.2715 14.5465 7.9025 14.1915 7.4375 14.1915C6.9725 14.1915 6.6035 14.5605 6.6035 15.0395V26.7555C6.6035 27.2205 6.9595 27.5765 7.4375 27.5765ZM10.7325 25.8805C11.2105 25.8805 11.5665 25.5115 11.5665 25.0465V16.7205C11.5665 16.2555 11.1975 15.9005 10.7325 15.9005C10.2815 15.9005 9.9125 16.2695 9.9125 16.7205V25.0465C9.9125 25.5115 10.2815 25.8805 10.7325 25.8805ZM4.1425 25.3615C4.6075 25.3615 4.9765 25.0055 4.9765 24.5275V17.2265C4.9765 16.7755 4.6075 16.3925 4.1425 16.3925C3.6775 16.3925 3.3085 16.7755 3.3085 17.2265V24.5275C3.3085 25.0055 3.6775 25.3615 4.1425 25.3615ZM14.0415 23.5425C14.5055 23.5425 14.8615 23.1875 14.8615 22.7085V19.0445C14.8615 18.5805 14.5055 18.2105 14.0415 18.2105C13.5625 18.2105 13.2075 18.5935 13.2075 19.0445V22.7085C13.2075 23.1875 13.5625 23.5425 14.0415 23.5425ZM0.8205 22.8325C1.2985 22.8325 1.6675 22.4625 1.6675 22.0115V19.7555C1.6675 19.2915 1.2985 18.9215 0.8205 18.9215C0.3695 18.9215 0.0005 19.2915 0.0005 19.7555V22.0115C0.0005 22.4625 0.3695 22.8325 0.8205 22.8325Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.8828125 26.482421875"
          className={className}
        >
          <path
            d="              M14.0955 22.0663H25.5255C28.5195 22.0663 30.1735 20.4123 30.1735 17.4453V14.3833L35.9435 19.0453C36.4495 19.4413 36.9145 19.7013 37.4335 19.7013C38.2945 19.7013 38.8825 19.0863 38.8825 18.0603V4.0063C38.8825 2.9803 38.2945 2.3653 37.4335 2.3653C36.9145 2.3653 36.4495 2.6253 35.9435 3.0213L30.1735 7.6703V4.6213C30.1735 1.6543 28.5195 0.0003 25.5255 0.0003H10.3905C7.4375 0.0003 5.7425 1.6543 5.7425 4.6213V11.8403C5.9065 11.7993 6.0835 11.7713 6.2615 11.7713C6.4395 11.7713 6.6175 11.7993 6.7675 11.8403V4.8263C6.7675 2.2563 8.0525 0.9573 10.6095 0.9573H25.3065C27.8765 0.9573 29.1625 2.2563 29.1625 4.8263V17.2263C29.1625 19.8103 27.8765 21.1093 25.3065 21.1093H14.0955ZM30.1735 13.2073V8.8593L36.5175 3.8283C36.8325 3.5823 37.0915 3.4043 37.3375 3.4043C37.6795 3.4043 37.8845 3.6503 37.8845 4.1423V17.9243C37.8845 18.4023 37.6795 18.6483 37.3375 18.6483C37.0915 18.6483 36.8325 18.4703 36.5175 18.2383ZM6.2615 26.4823C6.5355 26.4823 6.7535 26.2773 6.7535 26.0043V13.8363C6.7535 13.5623 6.5355 13.3433 6.2615 13.3433C6.0015 13.3433 5.7835 13.5623 5.7835 13.8363V26.0043C5.7835 26.2773 5.9885 26.4823 6.2615 26.4823ZM9.1605 25.0063C9.4335 25.0063 9.6385 24.8003 9.6385 24.5273V15.2853C9.6385 15.0113 9.4335 14.8063 9.1605 14.8063C8.8865 14.8063 8.6815 15.0113 8.6815 15.2853V24.5273C8.6815 24.8003 8.8865 25.0063 9.1605 25.0063ZM3.3765 24.1993C3.6505 24.1993 3.8555 23.9803 3.8555 23.7073V16.0913C3.8555 15.8323 3.6505 15.6133 3.3765 15.6133C3.1035 15.6133 2.8985 15.8323 2.8985 16.0913V23.7073C2.8985 23.9803 3.1035 24.1993 3.3765 24.1993ZM12.0585 22.7913C12.3325 22.7913 12.5375 22.5863 12.5375 22.3123V17.5003C12.5375 17.2403 12.3325 17.0213 12.0585 17.0213C11.7855 17.0213 11.5805 17.2403 11.5805 17.5003V22.3123C11.5805 22.5723 11.7855 22.7913 12.0585 22.7913ZM0.4785 21.9983C0.7515 21.9983 0.9575 21.7933 0.9575 21.5193V18.2933C0.9575 18.0193 0.7515 17.8143 0.4785 17.8143C0.2055 17.8143 -0.0005 18.0193 -0.0005 18.2933V21.5193C-0.0005 21.7933 0.2055 21.9983 0.4785 21.9983Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.595703125 26.38671875"
          className={className}
        >
          <path
            d="              M13.3712 21.9436H25.4842C28.3832 21.9436 29.9412 20.3846 29.9412 17.5136V14.1226L35.8882 18.8536C36.3812 19.2366 36.7912 19.4826 37.3102 19.4826C38.0762 19.4826 38.5952 18.9496 38.5952 17.9926V3.9646C38.5952 3.0076 38.0762 2.4746 37.3102 2.4746C36.7912 2.4746 36.3812 2.7206 35.8882 3.1036L29.9412 7.8336V4.4436C29.9412 1.5726 28.3832 -0.0004 25.4842 -0.0004H10.1172C7.2192 -0.0004 5.6602 1.5726 5.6602 4.4436V11.8126C5.7562 11.7986 5.8792 11.7856 5.9882 11.7856C6.1112 11.7856 6.2342 11.7986 6.3302 11.8126V4.6076C6.3302 1.9686 7.6152 0.6426 10.2812 0.6426H25.3202C27.9722 0.6426 29.2712 1.9686 29.2712 4.6076V17.3356C29.2712 19.9886 27.9722 21.3146 25.3202 21.3146H13.3712ZM29.9412 13.3436V8.5996L36.3262 3.5956C36.6952 3.3226 36.9962 3.1036 37.2832 3.1036C37.6662 3.1036 37.9262 3.3906 37.9262 3.9516V18.0056C37.9262 18.5666 37.6662 18.8536 37.2832 18.8536C36.9962 18.8536 36.6952 18.6346 36.3262 18.3616ZM6.0022 26.3866C6.2202 26.3866 6.3982 26.2086 6.3982 25.9906V13.5766C6.3982 13.3576 6.2202 13.1796 6.0022 13.1796C5.7692 13.1796 5.6052 13.3576 5.6052 13.5766V25.9906C5.6052 26.2086 5.7692 26.3866 6.0022 26.3866ZM8.8042 24.8826C9.0232 24.8826 9.2012 24.7046 9.2012 24.4866V15.0666C9.2012 14.8476 9.0232 14.6696 8.8042 14.6696C8.5722 14.6696 8.4082 14.8476 8.4082 15.0666V24.4866C8.4082 24.7046 8.5722 24.8826 8.8042 24.8826ZM3.1992 24.1176C3.4182 24.1176 3.5952 23.9396 3.5952 23.7206V15.8046C3.5952 15.5996 3.4182 15.4216 3.1992 15.4216C2.9802 15.4216 2.8032 15.5996 2.8032 15.8046V23.7206C2.8032 23.9396 2.9802 24.1176 3.1992 24.1176ZM11.6072 22.7636C11.8262 22.7636 12.0042 22.5856 12.0042 22.3676V17.1856C12.0042 16.9666 11.8262 16.7886 11.6072 16.7886C11.3752 16.7886 11.2112 16.9666 11.2112 17.1856V22.3676C11.2112 22.5856 11.3752 22.7636 11.6072 22.7636ZM0.3962 21.9566C0.6152 21.9566 0.7932 21.7796 0.7932 21.5606V17.9926C0.7932 17.7596 0.6152 17.5956 0.3962 17.5956C0.1782 17.5956 0.0002 17.7596 0.0002 17.9926V21.5606C0.0002 21.7796 0.1782 21.9566 0.3962 21.9566Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}