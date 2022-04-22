// Template Literal Types

// Position Props could be one of the following:
// left-top, left-center, left-bottom, right-top, right-center, right-bottom, center-top, center-center, center-bottom,

type HorizontalProps = 'left' | 'center' | 'right'
type VarticalProps = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalProps}-${VarticalProps}`, 'center-center'> | 'center'
}

export const Toast = ({position}: ToastProps) => {
    return (
        <div>
            Toast Norification Position - {position}
        </div>
    )
}