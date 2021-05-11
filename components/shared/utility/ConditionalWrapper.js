const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;


{/* HOW TO USE
    
    <Wrapper
        condition={shouldWrap}
        wrapper={children => <ProtectedLayout>{children}</ProtectedLayout>}
    >
        < p>This is a short message.</p>
    </Wrapper> 

*/}