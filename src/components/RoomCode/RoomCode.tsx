import copyImg from '../../assets/images/copy.svg'

import './room-code.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodetoClipeboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodetoClipeboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Código da sala</span>
    </button>
  )
}

//-Mpqw31z5h8JY4Ht7O2R
