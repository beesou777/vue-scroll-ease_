type TransOpt = {
    from?: number; 
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'; 
    rotate?: number; 
    delay?: number;
    duration?: number;
};

export const getTrans = (opt: TransOpt): { t: string, dly: string, dur: string } => {
    const { from = 20, direction = 'bottom', rotate = 0, delay = 0, duration = 1 } = opt;
    
    const map: Record<string, string> = {
        'top': `translateY(-${from}px)`,
        'bottom': `translateY(${from}px)`,
        'left': `translateX(-${from}px)`,
        'right': `translateX(${from}px)`,
        'left-top': `translate(-${from}px, -${from}px)`,
        'right-top': `translate(${from}px, -${from}px)`,
        'left-bottom': `translate(-${from}px, ${from}px)`,
        'right-bottom': `translate(${from}px, ${from}px)`
    }

    return {
        t: `${map[direction] || `translateY(${from}px)`} rotate(${rotate}deg)`,
        dly: `${delay}ms`,
        dur: `${duration}s`
    };
};
