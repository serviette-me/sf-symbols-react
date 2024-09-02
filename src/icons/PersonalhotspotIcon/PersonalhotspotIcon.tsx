import { IconProps } from "../../types"

export default function PersonalhotspotIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.384765625 24.8828125"
          className={className}
        >
          <path
            d="              M8.9687 17.9651H9.4337C9.2007 16.4741 9.1597 14.9711 9.4747 13.7811H9.1187C6.2887 13.7811 4.3617 11.8261 4.3617 8.9821C4.3617 6.1521 6.3167 4.1831 9.1187 4.1831H21.0407C23.8577 4.1831 25.7987 6.1521 25.7987 8.9821C25.7987 11.8261 23.8707 13.7811 21.0407 13.7811H18.4847C17.2677 14.4781 17.2817 17.1031 18.5257 17.9651H21.1917C26.4417 17.9651 30.1597 14.2321 30.1597 8.9821C30.1597 3.7321 26.4417 0.0001 21.1917 0.0001H8.9687C3.7187 0.0001 -0.0003 3.7321 -0.0003 8.9821C-0.0003 14.2321 3.7187 17.9651 8.9687 17.9651ZM20.1937 24.8831H32.4157C37.6657 24.8831 41.3847 21.1501 41.3847 15.9001C41.3847 10.6501 37.6657 6.9181 32.4157 6.9181H31.9507C32.1977 8.3941 32.2247 9.8981 31.9097 11.1011H32.2657C35.0957 11.1011 37.0367 13.0561 37.0367 15.9001C37.0367 18.7301 35.0817 20.6991 32.2657 20.6991H20.3577C17.5407 20.6991 15.5857 18.7301 15.5857 15.9001C15.5857 13.0561 17.5137 11.1011 20.3577 11.1011H22.9007C23.9667 10.2541 23.9527 7.7791 22.8727 6.9181H20.1937C14.9437 6.9181 11.2247 10.6501 11.2247 15.9001C11.2247 21.1501 14.9437 24.8831 20.1937 24.8831Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.33203125 23.5703125"
          className={className}
        >
          <path
            d="              M8.4487 16.9399H9.2417C9.0917 15.8319 9.0367 14.6839 9.2287 13.7399H8.6137C5.5097 13.7399 3.3497 11.5799 3.3497 8.4629C3.3497 5.3589 5.5237 3.1859 8.6137 3.1859H20.6307C23.7067 3.1859 25.8947 5.3589 25.8947 8.4629C25.8947 11.5799 23.7207 13.7399 20.6307 13.7399H16.9527C16.2417 14.3559 16.2827 16.1879 17.1167 16.9399H20.7817C25.7307 16.9399 29.2307 13.4399 29.2307 8.4629C29.2307 3.4999 25.7307 -0.0001 20.7817 -0.0001H8.4487C3.5137 -0.0001 -0.0003 3.4999 -0.0003 8.4629C-0.0003 13.4399 3.5137 16.9399 8.4487 16.9399ZM19.5507 23.5699H31.8827C36.8187 23.5699 40.3317 20.0699 40.3317 15.1079C40.3317 10.1309 36.8187 6.6309 31.8827 6.6309H31.0897C31.2537 7.7249 31.2947 8.8729 31.1037 9.8299H31.7187C34.8227 9.8299 36.9827 11.9899 36.9827 15.1079C36.9827 18.2109 34.8087 20.3849 31.7187 20.3849H19.7007C16.6247 20.3849 14.4377 18.2109 14.4377 15.1079C14.4377 11.9899 16.6117 9.8299 19.7007 9.8299H23.3787C24.0077 9.1329 23.9667 7.3829 23.2007 6.6309H19.5507C14.6017 6.6309 11.1017 10.1309 11.1017 15.1079C11.1017 20.0699 14.6017 23.5699 19.5507 23.5699Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.892578125 24.28125"
          className={className}
        >
          <path
            d="              M8.7227 17.4864H9.3377C9.1467 16.1734 9.1057 14.8474 9.3657 13.7674H8.8867C5.9197 13.7674 3.8827 11.7164 3.8827 8.7504C3.8827 5.7834 5.9337 3.7184 8.8867 3.7184H20.8497C23.7887 3.7184 25.8397 5.7834 25.8397 8.7504C25.8397 11.7164 23.8027 13.7674 20.8497 13.7674H17.7597C16.7887 14.4234 16.8027 16.6794 17.8557 17.4864H20.9997C26.0997 17.4864 29.7227 13.8634 29.7227 8.7504C29.7227 3.6234 26.0997 0.0004 20.9997 0.0004H8.7227C3.6227 0.0004 -0.0003 3.6234 -0.0003 8.7504C-0.0003 13.8634 3.6227 17.4864 8.7227 17.4864ZM19.8927 24.2814H32.1697C37.2697 24.2814 40.8927 20.6584 40.8927 15.5314C40.8927 10.4184 37.2697 6.7954 32.1697 6.7954H31.5407C31.7597 8.0934 31.7867 9.4204 31.5277 10.5134H32.0057C34.9587 10.5134 37.0097 12.5504 37.0097 15.5314C37.0097 18.4984 34.9457 20.5624 32.0057 20.5624H20.0427C17.1037 20.5624 15.0387 18.4984 15.0387 15.5314C15.0387 12.5504 17.0897 10.5134 20.0427 10.5134H23.1327C23.9807 9.7344 23.9527 7.6014 23.0237 6.7954H19.8927C14.7927 6.7954 11.1697 10.4184 11.1697 15.5314C11.1697 20.6584 14.7927 24.2814 19.8927 24.2814Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.595703125 21.765625"
          className={className}
        >
          <path
            d="              M7.6427 15.3125H9.1597C9.1057 14.7655 9.0507 14.1645 9.1327 13.6175H7.7927C4.2927 13.6175 1.7777 11.1425 1.7777 7.6565C1.7777 4.1835 4.3067 1.6955 7.7927 1.6955H19.7697C23.2697 1.6955 25.7847 4.1835 25.7847 7.6565C25.7847 11.1425 23.2697 13.6175 19.7697 13.6175H14.8337C14.6837 14.0405 14.7247 14.8335 15.0257 15.3125H19.9337C24.3637 15.3125 27.5627 12.1815 27.5627 7.6565C27.5627 3.1305 24.3637 -0.0005 19.9337 -0.0005H7.6427C3.1987 -0.0005 -0.0003 3.1305 -0.0003 7.6565C-0.0003 12.1815 3.1987 15.3125 7.6427 15.3125ZM18.6757 21.7655H30.9667C35.3967 21.7655 38.5957 18.6345 38.5957 14.1095C38.5957 9.5835 35.3967 6.4535 30.9667 6.4535H29.4357C29.5037 6.9995 29.5447 7.6015 29.4767 8.1485H30.8027C34.3027 8.1485 36.8187 10.6095 36.8187 14.1095C36.8187 17.5815 34.3027 20.0705 30.8027 20.0705H18.8257C15.3397 20.0705 12.8107 17.5815 12.8107 14.1095C12.8107 10.6095 15.3257 8.1485 18.8257 8.1485H23.7757C23.9117 7.7245 23.8707 6.9315 23.5707 6.4535H18.6757C14.2327 6.4535 11.0327 9.5835 11.0327 14.1095C11.0327 18.6345 14.2327 21.7655 18.6757 21.7655Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.6484375 22.75"
          className={className}
        >
          <path
            d="              M8.1207 16.2827H9.1187C9.0097 15.4357 8.9547 14.5197 9.0777 13.7267H8.2847C5.0177 13.7267 2.7067 11.4297 2.7067 8.1487C2.7067 4.8667 5.0177 2.5567 8.2847 2.5567H20.3577C23.6247 2.5567 25.9357 4.8667 25.9357 8.1487C25.9357 11.4297 23.6247 13.7267 20.3577 13.7267H15.9687C15.5997 14.2867 15.6547 15.6137 16.2287 16.2827H20.5217C25.2657 16.2827 28.6427 12.9337 28.6427 8.1487C28.6427 3.3497 25.2657 -0.0003 20.5217 -0.0003H8.1207C3.3767 -0.0003 -0.0003 3.3497 -0.0003 8.1487C-0.0003 12.9337 3.3767 16.2827 8.1207 16.2827ZM19.1407 22.7497H31.5277C36.2717 22.7497 39.6487 19.4007 39.6487 14.6017C39.6487 9.8167 36.2717 6.4667 31.5277 6.4667H30.5297C30.6387 7.3147 30.7067 8.2307 30.5707 9.0237H31.3767C34.6447 9.0237 36.9547 11.3207 36.9547 14.6017C36.9547 17.8687 34.6307 20.1937 31.3767 20.1937H19.2907C16.0367 20.1937 13.7127 17.8687 13.7127 14.6017C13.7127 11.3207 16.0237 9.0237 19.2907 9.0237H23.6797C24.0347 8.4357 23.9667 7.1367 23.4197 6.4667H19.1407C14.3827 6.4667 11.0057 9.8167 11.0057 14.6017C11.0057 19.4007 14.3827 22.7497 19.1407 22.7497Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.279296875 22.2578125"
          className={className}
        >
          <path
            d="              M7.9437 15.9006H9.0507C8.9687 15.1896 8.9007 14.4106 8.9957 13.6996H8.0937C4.7307 13.6996 2.3377 11.3336 2.3377 7.9436C2.3377 4.5796 4.7437 2.2016 8.0937 2.2016H20.2207C23.5707 2.2016 25.9767 4.5796 25.9767 7.9436C25.9767 11.3336 23.5707 13.6996 20.2207 13.6996H15.4217C15.2307 14.2326 15.2987 15.2716 15.7227 15.9006H20.3707C25.0057 15.9006 28.3147 12.6466 28.3147 7.9436C28.3147 3.2536 25.0057 -0.0004 20.3707 -0.0004H7.9437C3.3087 -0.0004 -0.0003 3.2536 -0.0003 7.9436C-0.0003 12.6466 3.3087 15.9006 7.9437 15.9006ZM18.9077 22.2576H31.3357C35.9707 22.2576 39.2797 19.0036 39.2797 14.3006C39.2797 9.6116 35.9707 6.3576 31.3357 6.3576H30.2147C30.2967 7.0546 30.3657 7.8476 30.2827 8.5586H31.1717C34.5347 8.5586 36.9417 10.9236 36.9417 14.3006C36.9417 17.6776 34.5347 20.0566 31.1717 20.0566H19.0587C15.7087 20.0566 13.3027 17.6776 13.3027 14.3006C13.3027 10.9236 15.6957 8.5586 19.0587 8.5586H23.8577C24.0487 8.0256 23.9807 6.9866 23.5427 6.3576H18.9077C14.2597 6.3576 10.9647 9.6116 10.9647 14.3006C10.9647 19.0036 14.2597 22.2576 18.9077 22.2576Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.94921875 23.10546875"
          className={className}
        >
          <path
            d="              M8.2717 16.5705H9.1737C9.0507 15.6135 8.9827 14.5875 9.1467 13.7405H8.4217C5.2367 13.7405 2.9807 11.4985 2.9807 8.2855C2.9807 5.0855 5.2367 2.8305 8.4217 2.8305H20.4807C23.6657 2.8305 25.9217 5.0855 25.9217 8.2855C25.9217 11.4985 23.6657 13.7405 20.4807 13.7405H16.3927C15.8727 14.3145 15.9277 15.8595 16.6117 16.5705H20.6307C25.4567 16.5705 28.9027 13.1525 28.9027 8.2855C28.9027 3.4175 25.4567 0.0005 20.6307 0.0005H8.2717C3.4317 0.0005 -0.0003 3.4175 -0.0003 8.2855C-0.0003 13.1525 3.4317 16.5705 8.2717 16.5705ZM19.3187 23.1055H31.6777C36.5177 23.1055 39.9487 19.6875 39.9487 14.8205C39.9487 9.9535 36.5177 6.5355 31.6777 6.5355H30.7757C30.9117 7.4925 30.9667 8.5035 30.8027 9.3655H31.5277C34.7127 9.3655 36.9687 11.6075 36.9687 14.8205C36.9687 18.0195 34.7127 20.2755 31.5277 20.2755H19.4687C16.2827 20.2755 14.0277 18.0195 14.0277 14.8205C14.0277 11.6075 16.2827 9.3655 19.4687 9.3655H23.5567C24.0217 8.7365 23.9667 7.2465 23.3237 6.5355H19.3187C14.4787 6.5355 11.0467 9.9535 11.0467 14.8205C11.0467 19.6875 14.4787 23.1055 19.3187 23.1055Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.70703125 21.08203125"
          className={className}
        >
          <path
            d="              M7.2327 14.5058H9.3107C9.2697 14.1638 9.2557 13.8228 9.3107 13.4938H7.3967C3.7187 13.4938 1.0387 10.8828 1.0387 7.2598C1.0387 3.6367 3.7327 1.0117 7.3967 1.0117H19.1957C22.8597 1.0117 25.5387 3.6367 25.5387 7.2598C25.5387 10.8828 22.8727 13.4938 19.1957 13.4938H14.0547C13.9727 13.7538 13.9867 14.2188 14.0957 14.5058H19.3457C23.5157 14.5058 26.5917 11.5528 26.5917 7.2598C26.5917 2.9528 23.5157 -0.0003 19.3457 -0.0003H7.2327C3.0627 -0.0003 -0.0003 2.9528 -0.0003 7.2598C-0.0003 11.5528 3.0627 14.5058 7.2327 14.5058ZM18.3617 21.0818H30.4747C34.6447 21.0818 37.7067 18.1288 37.7067 13.8228C37.7067 9.5298 34.6447 6.5758 30.4747 6.5758H28.4097C28.4377 6.9178 28.4507 7.2598 28.4097 7.5878H30.3107C34.0017 7.5878 36.6677 10.1988 36.6677 13.8228C36.6677 17.4458 33.9887 20.0708 30.3107 20.0708H18.5257C14.8477 20.0708 12.1677 17.4458 12.1677 13.8228C12.1677 10.1988 14.8337 7.5878 18.5257 7.5878H23.6657C23.7477 7.3278 23.7347 6.8638 23.6117 6.5758H18.3617C14.1917 6.5758 11.1287 9.5298 11.1287 13.8228C11.1287 18.1288 14.1917 21.0818 18.3617 21.0818Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.255859375 20.7265625"
          className={className}
        >
          <path
            d="              M7.0277 14.096H9.3787C9.3657 13.863 9.3657 13.645 9.3927 13.426H7.1917C3.4177 13.426 0.6697 10.746 0.6697 7.041C0.6697 3.363 3.4317 0.67 7.1917 0.67H18.8947C22.6547 0.67 25.4157 3.363 25.4157 7.041C25.4157 10.746 22.6677 13.426 18.8947 13.426H13.6447C13.6037 13.617 13.6037 13.918 13.6307 14.096H19.0447C23.0917 14.096 26.0857 11.225 26.0857 7.041C26.0857 2.871 23.0917 0 19.0447 0H7.0277C2.9937 0 -0.0003 2.871 -0.0003 7.041C-0.0003 11.225 2.9937 14.096 7.0277 14.096ZM18.2107 20.727H30.2287C34.2617 20.727 37.2557 17.855 37.2557 13.686C37.2557 9.502 34.2617 6.631 30.2287 6.631H27.8767C27.8907 6.863 27.8907 7.082 27.8637 7.301H30.0647C33.8377 7.301 36.5857 9.98 36.5857 13.686C36.5857 17.363 33.8237 20.057 30.0647 20.057H18.3617C14.6017 20.057 11.8397 17.363 11.8397 13.686C11.8397 9.98 14.5877 7.301 18.3617 7.301H23.6117C23.6527 7.109 23.6527 6.809 23.6247 6.631H18.2107C14.1637 6.631 11.1697 9.502 11.1697 13.686C11.1697 17.855 14.1637 20.727 18.2107 20.727Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}