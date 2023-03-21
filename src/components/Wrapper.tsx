interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = (props: WrapperProps) => (
  <div style={{ backgroundColor: 'lightcoral' }}>{props.children}</div>
);
