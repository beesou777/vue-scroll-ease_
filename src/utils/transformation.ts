type TransformOptions = {
    from?: number; 
    direction?: 'top' | 'bottom' | 'left' | 'right'; 
    rotate?: number; 
    delay?: number;
};

export const getTransformValue = (options: TransformOptions): { transform: string, transitionDelay: string } => {
    const { from = 20, direction = 'bottom', rotate, delay = 0 } = options;
    
    let transformValue = '';
    switch (direction) {
        case 'top':
            transformValue = `translateY(-${from}px)`;
            break;
        case 'bottom':
            transformValue = `translateY(${from}px)`;
            break;
        case 'left':
            transformValue = `translateX(-${from}px)`;
            break;
        case 'right':
            transformValue = `translateX(${from}px)`;
            break;
        default:
            transformValue = `translateY(${from}px)`;
            break;
    }

    // Append rotation if provided
    if (rotate !== undefined) {
        transformValue += ` rotate(${rotate}deg)`;
    }

    // Return the transform and delay
    return {
        transform: transformValue,
        transitionDelay: `${delay}ms`
    };
};
