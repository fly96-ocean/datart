import { CSSProperties, FC, useMemo } from 'react';
import styled from 'styled-components/macro';
import { BORDER_RADIUS, SPACE_TIMES } from 'styles/StyleConstants';
interface ColorTagProps {
  color?: string;
  className?: string;
  size?: number;
  bordered?: boolean;
  style?: CSSProperties;
}
export const ColorTag: FC<ColorTagProps> = ({
  color,
  className,
  size = 32,
  style,
}) => {
  const _style = useMemo(() => {
    return Object.assign(
      {
        backgroundColor: color,
        height: size,
        width: size,
      },
      style,
    );
  }, [color, size, style]);
  return <ColorTagBox style={_style} className={className} />;
};

const ColorTagBox = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid ${p => p.theme.borderColorBase};
  border-radius: ${BORDER_RADIUS};
`;

export const ColorPicker = styled.div<{ color?: string }>`
  flex-shrink: 0;
  width: ${SPACE_TIMES(8)};
  height: ${SPACE_TIMES(8)};
  cursor: pointer;
  background-color: ${p => p.color || 'transparent'};
  border-radius: ${BORDER_RADIUS};
`;
