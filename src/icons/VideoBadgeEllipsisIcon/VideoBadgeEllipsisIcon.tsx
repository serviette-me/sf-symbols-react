import { IconProps } from "../../types"

export default function VideoBadgeEllipsisIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.439453125 28.02734375"
          className={className}
        >
          <path
            d="              M16.2698 24.5001H25.6208C29.8188 24.5001 32.0328 22.2851 32.0328 18.3751V17.7731L35.9158 21.0411C36.9548 21.9161 37.8578 22.5171 38.8688 22.5171C40.3458 22.5171 41.4398 21.5191 41.4398 19.8651V4.9901C41.4398 3.3221 40.3458 2.3241 38.8688 2.3241C37.8438 2.3241 36.9548 2.9261 35.9158 3.8011L32.0328 7.0821V6.1111C32.0328 2.2151 29.8188 0.0001 25.6208 0.0001H11.6898C7.4918 0.0001 5.2778 2.2151 5.2778 6.1391V11.1421C5.9608 10.9781 6.6988 10.8831 7.4378 10.8831C8.2168 10.8831 8.9828 10.9921 9.7068 11.1701V6.8081C9.7068 5.0311 10.6918 4.1291 12.4278 4.1291H24.8828C26.6058 4.1291 27.5898 5.1821 27.5898 6.8081V17.6911C27.5898 19.3051 26.5368 20.3571 24.8418 20.3571H17.1308C17.1308 21.8201 16.8988 23.1601 16.2698 24.5001ZM36.9548 17.2131L32.0328 13.3031V11.5531L36.9548 7.6291C37.0368 7.5601 37.1058 7.5191 37.2008 7.5191C37.2968 7.5191 37.3788 7.5881 37.3788 7.7251V17.1311C37.3788 17.2541 37.2968 17.3361 37.2008 17.3361C37.1058 17.3361 37.0368 17.2811 36.9548 17.2131ZM7.4508 28.0271C11.5258 28.0271 14.9028 24.6231 14.9028 20.5621C14.9028 16.5021 11.5258 13.1251 7.4508 13.1251C3.3628 13.1251 -0.0002 16.5021 -0.0002 20.5621C-0.0002 24.6371 3.3628 28.0271 7.4508 28.0271ZM11.1838 22.0801C10.3498 22.0801 9.6658 21.3691 9.6658 20.5621C9.6658 19.7561 10.3498 19.0451 11.1838 19.0451C11.9898 19.0451 12.6598 19.7561 12.6598 20.5621C12.6598 21.3691 11.9898 22.0801 11.1838 22.0801ZM3.6778 22.0391C2.8988 22.0391 2.2288 21.3551 2.2288 20.5621C2.2288 19.7831 2.8988 19.1001 3.6778 19.1001C4.4848 19.1001 5.1548 19.7831 5.1548 20.5621C5.1548 21.3551 4.4848 22.0391 3.6778 22.0391ZM7.4508 22.0391C6.6578 22.0391 5.9748 21.3551 5.9748 20.5621C5.9748 19.7831 6.6578 19.1001 7.4508 19.1001C8.2308 19.1001 8.9138 19.7831 8.9138 20.5621C8.9138 21.3551 8.2308 22.0391 7.4508 22.0391Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.564453125 27.193359375"
          className={className}
        >
          <path
            d="              M15.7364 23.4882H25.5394C29.3124 23.4882 31.4184 21.4102 31.4184 17.7872V16.5562L35.9434 20.3712C36.7364 21.0272 37.4884 21.4922 38.2814 21.4922C39.6074 21.4922 40.5644 20.5492 40.5644 19.0862V4.5802C40.5644 3.1032 39.6074 2.1742 38.2814 2.1742C37.4744 2.1742 36.7364 2.6252 35.9434 3.2952L31.4184 7.1092V5.6872C31.4184 2.0782 29.3124 0.0002 25.5394 0.0002H11.4294C7.7524 0.0002 5.5644 2.0782 5.5644 5.7012V10.8962C6.0844 10.7872 6.6444 10.7322 7.1914 10.7322C7.7654 10.7322 8.3394 10.8012 8.8864 10.9102V6.1932C8.8864 4.1292 10.0074 3.0902 11.9904 3.0902H24.9784C26.9614 3.0902 28.0954 4.1972 28.0954 6.1932V17.2812C28.0954 19.2772 26.9334 20.3852 24.9644 20.3852H16.4064C16.3654 21.4782 16.1874 22.4902 15.7364 23.4882ZM36.9824 17.5272L31.4184 13.0152V10.6362L36.9824 6.1382C37.0784 6.0562 37.1604 6.0022 37.2554 6.0022C37.3924 6.0022 37.4744 6.0972 37.4744 6.2612V17.4042C37.4744 17.5682 37.3924 17.6642 37.2554 17.6642C37.1604 17.6642 37.0784 17.5952 36.9824 17.5272ZM7.2054 27.1932C11.1294 27.1932 14.3964 23.9122 14.3964 19.9882C14.3964 16.0512 11.1424 12.7972 7.2054 12.7972C3.2544 12.7972 0.0004 16.0512 0.0004 19.9882C0.0004 23.9262 3.2544 27.1932 7.2054 27.1932ZM10.9644 21.2872C10.2544 21.2872 9.6794 20.6722 9.6794 19.9882C9.6794 19.2912 10.2544 18.6892 10.9644 18.6892C11.6624 18.6892 12.2504 19.2912 12.2364 19.9882C12.2364 20.6722 11.6624 21.2872 10.9644 21.2872ZM3.4184 21.2602C2.7344 21.2602 2.1604 20.6722 2.1604 19.9882C2.1604 19.3042 2.7344 18.7172 3.4184 18.7172C4.1154 18.7172 4.6894 19.3042 4.6894 19.9882C4.6894 20.6722 4.1154 21.2602 3.4184 21.2602ZM7.2054 21.2602C6.5214 21.2602 5.9334 20.6722 5.9334 19.9882C5.9334 19.3042 6.5214 18.7172 7.2054 18.7172C7.8884 18.7172 8.4764 19.3042 8.4764 19.9882C8.4764 20.6722 7.8884 21.2602 7.2054 21.2602Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.015625 27.64453125"
          className={className}
        >
          <path
            d="              M16.0101 24.0217H25.5801C29.5721 24.0217 31.7321 21.8747 31.7321 18.1017V17.1997L35.9301 20.7267C36.8461 21.5057 37.6801 22.0387 38.5821 22.0387C39.9901 22.0387 41.0161 21.0687 41.0161 19.4957V4.7987C41.0161 3.2267 39.9901 2.2557 38.5821 2.2557C37.6661 2.2557 36.8461 2.7887 35.9301 3.5687L31.7321 7.0957V5.9197C31.7321 2.1597 29.5721 -0.0003 25.5801 -0.0003H11.5661C7.6151 -0.0003 5.4001 2.1597 5.4001 5.9337V11.0337C6.0161 10.8967 6.6721 10.8277 7.3281 10.8277C7.9981 10.8277 8.6681 10.9097 9.3101 11.0467V6.5217C9.3101 4.6077 10.3631 3.6507 12.2231 3.6507H24.9241C26.7691 3.6507 27.8221 4.7307 27.8221 6.5217V17.4997C27.8221 19.3047 26.7151 20.3847 24.8961 20.3847H16.7891C16.7621 21.6697 16.5571 22.8457 16.0101 24.0217ZM36.9691 17.3637L31.7321 13.1797V11.1287L36.9691 6.9317C37.0511 6.8637 37.1331 6.8087 37.2151 6.8087C37.3381 6.8087 37.4201 6.8907 37.4201 7.0407V17.2677C37.4201 17.4047 37.3381 17.4997 37.2151 17.4997C37.1331 17.4997 37.0511 17.4317 36.9691 17.3637ZM7.3281 27.6447C11.3341 27.6447 14.6561 24.2947 14.6561 20.3027C14.6561 16.2967 11.3481 12.9747 7.3281 12.9747C3.3091 12.9747 0.0001 16.2967 0.0001 20.3027C0.0001 24.3087 3.3091 27.6447 7.3281 27.6447ZM11.0741 21.7107C10.2951 21.7107 9.6661 21.0407 9.6661 20.3027C9.6661 19.5507 10.2951 18.8807 11.0741 18.8807C11.8261 18.8807 12.4551 19.5507 12.4551 20.3027C12.4551 21.0407 11.8261 21.7107 11.0741 21.7107ZM3.5551 21.6697C2.8161 21.6697 2.1871 21.0407 2.1871 20.3027C2.1871 19.5647 2.8161 18.9217 3.5551 18.9217C4.3071 18.9217 4.9351 19.5647 4.9221 20.3027C4.9221 21.0407 4.3071 21.6697 3.5551 21.6697ZM7.3281 21.6697C6.5901 21.6697 5.9471 21.0407 5.9471 20.3027C5.9471 19.5647 6.5901 18.9217 7.3281 18.9217C8.0661 18.9217 8.7091 19.5647 8.7091 20.3027C8.7091 21.0407 8.0661 21.6697 7.3281 21.6697Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.470703125 26.072265625"
          className={className}
        >
          <path
            d="              M14.6011 22.2983H25.6351C28.8201 22.2983 30.6801 20.4943 30.6801 17.3083V14.9293L36.1071 19.4273C36.6271 19.8513 37.1741 20.1383 37.7211 20.1383C38.7731 20.1383 39.4711 19.3733 39.4711 18.2113V4.1013C39.4711 2.9393 38.7731 2.1733 37.7211 2.1733C37.1741 2.1733 36.6271 2.4613 36.1071 2.8843L30.6801 7.3823V5.0043C30.6801 1.8183 28.8201 0.0003 25.6351 0.0003H10.9921C7.9021 0.0003 5.9471 1.8183 5.9471 5.0043V10.9233C6.2341 10.8963 6.5081 10.8823 6.7951 10.8823C7.0681 10.8823 7.3551 10.8963 7.6421 10.9373V5.2773C7.6421 2.8023 8.9281 1.5863 11.2931 1.5863H25.3341C27.6991 1.5863 28.9841 2.8023 28.9841 5.2773V17.0353C28.9841 19.4963 27.6991 20.7133 25.3341 20.7133H14.9981C14.9301 21.2733 14.7931 21.8063 14.6011 22.2983ZM36.9411 18.0193L30.6801 12.9333V9.3653L36.9411 4.2933C37.1461 4.1293 37.2971 4.0193 37.4741 4.0193C37.7071 4.0193 37.8441 4.1973 37.8441 4.5113V17.7873C37.8441 18.1013 37.7071 18.2793 37.4741 18.2793C37.2971 18.2793 37.1461 18.1703 36.9411 18.0193ZM6.7951 26.0723C10.4861 26.0723 13.5901 22.9963 13.5901 19.2773C13.5901 15.5453 10.5271 12.4683 6.7951 12.4683C3.0761 12.4683 0.0001 15.5453 0.0001 19.2773C0.0001 23.0093 3.0761 26.0723 6.7951 26.0723ZM3.1171 20.2613C2.5841 20.2613 2.1331 19.8103 2.1331 19.2633C2.1331 18.7303 2.5841 18.2793 3.1171 18.2793C3.6641 18.2793 4.1151 18.7443 4.1151 19.2633C4.1011 19.8103 3.6501 20.2613 3.1171 20.2613ZM6.8081 20.2613C6.2751 20.2613 5.8241 19.8103 5.8241 19.2633C5.8241 18.7303 6.2751 18.2793 6.8081 18.2793C7.3551 18.2793 7.8201 18.7443 7.8071 19.2633C7.8071 19.8103 7.3421 20.2613 6.8081 20.2613ZM10.4731 20.2613C9.9261 20.2613 9.4741 19.8103 9.4741 19.2633C9.4741 18.7303 9.9261 18.2793 10.4731 18.2793C11.0061 18.2793 11.4711 18.7443 11.4571 19.2633C11.4431 19.8103 11.0061 20.2613 10.4731 20.2613Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.990234375 26.66015625"
          className={className}
        >
          <path
            d="              M15.3943 22.8321H25.4983C28.9843 22.8321 31.0213 20.8491 31.0213 17.4041V15.7641L35.9573 19.9331C36.5863 20.4671 37.2563 20.8221 37.8983 20.8221C39.1423 20.8221 39.9903 19.9201 39.9903 18.5801V4.3071C39.9903 2.9671 39.1423 2.0641 37.8983 2.0641C37.2563 2.0641 36.5863 2.4331 35.9573 2.9531L31.0213 7.1231V5.4141C31.0213 1.9821 28.9843 0.0001 25.4983 0.0001H11.2653C7.9023 0.0001 5.7423 1.9821 5.7423 5.4281V10.7321C6.1663 10.6781 6.6033 10.6371 7.0413 10.6371C7.4783 10.6371 7.9163 10.6781 8.3533 10.7461V5.8101C8.3533 3.5411 9.5703 2.4201 11.7163 2.4201H25.0473C27.1933 2.4201 28.4103 3.5681 28.4103 5.8101V17.0211C28.4103 19.2641 27.1793 20.3981 25.0473 20.3981H15.9413C15.8863 21.2601 15.7223 22.0661 15.3943 22.8321ZM36.9823 17.7191L31.0213 12.8241V10.0621L36.9823 5.1681C37.1053 5.0721 37.1873 5.0171 37.2973 5.0171C37.4473 5.0171 37.5293 5.1411 37.5293 5.3181V17.5681C37.5293 17.7601 37.4473 17.8691 37.2973 17.8691C37.1873 17.8691 37.1053 17.8011 36.9823 17.7191ZM7.0413 26.6601C10.8693 26.6601 14.0823 23.4611 14.0823 19.6191C14.0823 15.7641 10.8963 12.5781 7.0413 12.5781C3.1853 12.5781 0.0003 15.7641 0.0003 19.6191C0.0003 23.4751 3.1853 26.6601 7.0413 26.6601ZM10.8283 20.7671C10.1993 20.7671 9.6793 20.2341 9.6793 19.6051C9.6793 18.9901 10.1993 18.4571 10.8283 18.4571C11.4573 18.4571 11.9763 18.9901 11.9633 19.6051C11.9633 20.2341 11.4433 20.7671 10.8283 20.7671ZM3.2403 20.7541C2.6253 20.7541 2.1193 20.2341 2.1193 19.6051C2.1193 18.9901 2.6253 18.4711 3.2403 18.4711C3.8693 18.4711 4.3883 19.0041 4.3883 19.6051C4.3883 20.2341 3.8693 20.7541 3.2403 20.7541ZM7.0543 20.7541C6.4393 20.7541 5.9063 20.2341 5.9063 19.6051C5.9063 18.9901 6.4393 18.4711 7.0543 18.4711C7.6703 18.4711 8.2033 19.0041 8.1893 19.6051C8.1893 20.2341 7.6563 20.7541 7.0543 20.7541Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.662109375 26.359375"
          className={className}
        >
          <path
            d="              M15.1893 22.4764H25.4573C28.7933 22.4764 30.7893 20.5354 30.7893 17.1994V15.3264L35.9573 19.7014C36.5043 20.1524 37.1053 20.4664 37.6663 20.4664C38.8693 20.4664 39.6623 19.5784 39.6623 18.3064V4.1704C39.6623 2.8984 38.8693 2.0094 37.6663 2.0094C37.1053 2.0094 36.5043 2.3244 35.9573 2.7754L30.7893 7.1504V5.2634C30.7893 1.9414 28.7933 0.0004 25.4573 0.0004H11.1703C7.9843 0.0004 5.8383 1.9414 5.8383 5.2634V10.6504C6.2073 10.6094 6.5763 10.5824 6.9313 10.5824C7.3003 10.5824 7.6703 10.6094 8.0393 10.6504V5.5914C8.0393 3.2134 9.3103 2.0504 11.5523 2.0504H25.0743C27.3023 2.0504 28.5883 3.2134 28.5883 5.5914V16.8844C28.5883 19.2504 27.3023 20.4124 25.0743 20.4124H15.6683C15.5993 21.1364 15.4493 21.8204 15.1893 22.4764ZM36.9823 17.8414L30.7893 12.7284V9.7484L36.9823 4.6344C37.1053 4.5394 37.1873 4.4704 37.3103 4.4704C37.4743 4.4704 37.5433 4.6074 37.5433 4.7984V17.6774C37.5433 17.8694 37.4743 17.9924 37.3103 17.9924C37.1873 17.9924 37.1053 17.9234 36.9823 17.8414ZM6.9453 26.3594C10.7053 26.3594 13.8903 23.2014 13.8903 19.4144C13.8903 15.5994 10.7463 12.4684 6.9453 12.4684C3.1313 12.4684 0.0003 15.5994 0.0003 19.4144C0.0003 23.2284 3.1313 26.3594 6.9453 26.3594ZM3.1313 20.4804C2.5563 20.4804 2.0783 19.9884 2.0783 19.4004C2.0783 18.8264 2.5563 18.3344 3.1313 18.3344C3.7323 18.3344 4.2113 18.8394 4.2113 19.4004C4.1973 19.9884 3.7183 20.4804 3.1313 20.4804ZM6.9453 20.4804C6.3713 20.4804 5.8793 19.9884 5.8793 19.4004C5.8793 18.8264 6.3713 18.3344 6.9453 18.3344C7.5333 18.3344 8.0253 18.8394 8.0253 19.4004C8.0113 19.9884 7.5193 20.4804 6.9453 20.4804ZM10.7463 20.4804C10.1583 20.4804 9.6793 19.9884 9.6793 19.4004C9.6793 18.8264 10.1583 18.3344 10.7463 18.3344C11.3203 18.3344 11.8123 18.8394 11.7993 19.4004C11.7993 19.9884 11.3203 20.4804 10.7463 20.4804Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.236328125 26.892578125"
          className={className}
        >
          <path
            d="              M15.545 23.1195H25.525C29.135 23.1195 31.186 21.0955 31.186 17.5825V16.1055L35.957 20.1385C36.654 20.7125 37.352 21.1235 38.062 21.1235C39.348 21.1235 40.236 20.2075 40.236 18.8125V4.4295C40.236 3.0355 39.348 2.1195 38.062 2.1195C37.352 2.1195 36.654 2.5295 35.957 3.1035L31.186 7.1235V5.5505C31.186 2.0375 29.135 -0.0005 25.525 -0.0005H11.348C7.834 -0.0005 5.674 2.0375 5.674 5.5505V10.8145C6.139 10.7325 6.617 10.6915 7.109 10.6915C7.602 10.6915 8.094 10.7325 8.586 10.8285V5.9885C8.586 3.8005 9.762 2.7205 11.84 2.7205H25.02C27.098 2.7205 28.273 3.8555 28.273 5.9885V17.1445C28.273 19.2775 27.07 20.3985 25.02 20.3985H16.146C16.092 21.3555 15.914 22.2575 15.545 23.1195ZM36.982 17.6505L31.186 12.9195V10.3225L36.982 5.5915C37.092 5.5095 37.174 5.4555 37.283 5.4555C37.434 5.4555 37.502 5.5645 37.502 5.7285V17.5135C37.502 17.6775 37.434 17.7875 37.283 17.7875C37.174 17.7875 37.092 17.7185 36.982 17.6505ZM7.109 26.8925C10.978 26.8925 14.219 23.6665 14.219 19.7835C14.219 15.8865 11.006 12.6875 7.109 12.6875C3.213 12.6875 0 15.9005 0 19.7835C0 23.6795 3.213 26.8925 7.109 26.8925ZM10.896 20.9995C10.227 20.9995 9.68 20.4255 9.68 19.7835C9.68 19.1265 10.227 18.5665 10.896 18.5665C11.539 18.5665 12.086 19.1405 12.086 19.7835C12.086 20.4255 11.539 20.9995 10.896 20.9995ZM3.322 20.9865C2.68 20.9865 2.133 20.4255 2.133 19.7835C2.133 19.1405 2.68 18.5805 3.322 18.5805C3.978 18.5805 4.525 19.1405 4.525 19.7835C4.512 20.4255 3.978 20.9865 3.322 20.9865ZM7.123 20.9865C6.48 20.9865 5.92 20.4255 5.92 19.7835C5.92 19.1405 6.48 18.5805 7.123 18.5805C7.766 18.5805 8.326 19.1405 8.312 19.7835C8.312 20.4255 7.766 20.9865 7.123 20.9865Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.23828125 25.67578125"
          className={className}
        >
          <path
            d="              M13.822 22.0663H25.881C28.875 22.0663 30.529 20.4123 30.529 17.4453V14.3833L36.299 19.0453C36.805 19.4413 37.27 19.7013 37.789 19.7013C38.65 19.7013 39.238 19.0863 39.238 18.0603V4.0063C39.238 2.9803 38.65 2.3653 37.789 2.3653C37.27 2.3653 36.805 2.6253 36.299 3.0213L30.529 7.6833V4.6213C30.529 1.6543 28.875 0.0003 25.881 0.0003H10.746C7.793 0.0003 6.098 1.6543 6.098 4.6213V11.2653C6.262 11.2523 6.439 11.2523 6.59 11.2523C6.768 11.2523 6.945 11.2523 7.123 11.2793V4.8263C7.123 2.2563 8.408 0.9573 10.965 0.9573H25.662C28.232 0.9573 29.518 2.2563 29.518 4.8263V17.2263C29.518 19.8103 28.232 21.1093 25.662 21.1093H14.109C14.041 21.4373 13.945 21.7653 13.822 22.0663ZM36.873 18.2383L30.529 13.2073V8.8593L36.873 3.8283C37.188 3.5823 37.447 3.4043 37.693 3.4043C38.035 3.4043 38.24 3.6503 38.24 4.1423V17.9243C38.24 18.4023 38.035 18.6483 37.693 18.6483C37.447 18.6483 37.188 18.4703 36.873 18.2383ZM6.604 25.6753C10.199 25.6753 13.207 22.6953 13.207 19.0723C13.207 15.4493 10.227 12.4683 6.604 12.4683C2.994 12.4683 0 15.4633 0 19.0723C0 22.7093 2.994 25.6753 6.604 25.6753ZM3.09 19.9613C2.611 19.9613 2.201 19.5503 2.201 19.0583C2.201 18.5803 2.611 18.1703 3.09 18.1703C3.582 18.1703 4.006 18.5933 3.992 19.0583C3.965 19.5503 3.568 19.9613 3.09 19.9613ZM6.631 19.9613C6.152 19.9613 5.742 19.5503 5.742 19.0583C5.742 18.5803 6.152 18.1703 6.631 18.1703C7.123 18.1703 7.547 18.5933 7.533 19.0583C7.52 19.5503 7.109 19.9613 6.631 19.9613ZM10.104 19.9613C9.625 19.9613 9.215 19.5503 9.215 19.0583C9.215 18.5803 9.625 18.1703 10.104 18.1703C10.596 18.1703 11.02 18.5933 11.006 19.0583C10.979 19.5503 10.582 19.9613 10.104 19.9613Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.115234375 25.484375"
          className={className}
        >
          <path
            d="              M13.4118 21.9436H26.0038C28.9028 21.9436 30.4608 20.3846 30.4608 17.5136V14.1096L36.4078 18.8536C36.9008 19.2366 37.3108 19.4826 37.8298 19.4826C38.5958 19.4826 39.1148 18.9496 39.1148 17.9926V3.9646C39.1148 3.0076 38.5958 2.4746 37.8298 2.4746C37.3108 2.4746 36.9008 2.7206 36.4078 3.1036L30.4608 7.8336V4.4436C30.4608 1.5726 28.9028 -0.0004 26.0038 -0.0004H10.6367C7.7388 -0.0004 6.1798 1.5726 6.1798 4.4436V11.4436C6.2758 11.4566 6.3988 11.4566 6.4938 11.4566C6.6168 11.4566 6.7268 11.4566 6.8498 11.4706V4.6076C6.8498 1.9686 8.1348 0.6426 10.8008 0.6426H25.8398C28.4918 0.6426 29.7908 1.9686 29.7908 4.6076V17.3356C29.7908 19.9886 28.4918 21.3146 25.8398 21.3146H13.6578C13.5898 21.5336 13.5078 21.7516 13.4118 21.9436ZM36.8458 18.3616L30.4608 13.3436V8.5996L36.8458 3.5956C37.2148 3.3226 37.5157 3.1036 37.8028 3.1036C38.1858 3.1036 38.4457 3.3906 38.4457 3.9516V18.0056C38.4457 18.5666 38.1858 18.8536 37.8028 18.8536C37.5157 18.8536 37.2148 18.6346 36.8458 18.3616ZM6.5078 25.4846C10.0628 25.4846 13.0018 22.5586 13.0018 18.9906C13.0018 15.4086 10.0758 12.4826 6.5078 12.4826C2.9528 12.4826 -0.0002 15.4216 -0.0002 18.9906C-0.0002 22.5586 2.9528 25.4846 6.5078 25.4846ZM3.0758 19.8106C2.6248 19.8106 2.2418 19.4416 2.2418 18.9626C2.2418 18.5116 2.6248 18.1286 3.0758 18.1286C3.5408 18.1286 3.9378 18.5256 3.9238 18.9626C3.9098 19.4416 3.5278 19.8106 3.0758 19.8106ZM6.5348 19.8106C6.0838 19.8106 5.7008 19.4416 5.7008 18.9626C5.7008 18.5116 6.0838 18.1286 6.5348 18.1286C6.9998 18.1286 7.4098 18.5256 7.3828 18.9626C7.3688 19.4416 6.9868 19.8106 6.5348 19.8106ZM9.9118 19.8106C9.4608 19.8106 9.0778 19.4416 9.0778 18.9626C9.0778 18.5116 9.4608 18.1286 9.9118 18.1286C10.3908 18.1286 10.7868 18.5256 10.7598 18.9626C10.7458 19.4416 10.3638 19.8106 9.9118 19.8106Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
