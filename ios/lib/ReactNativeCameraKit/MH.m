//
//  MH.m
//  ReactNativeCameraKit
//
//  Created by HoookedUP-1 on 03/10/19.
//  Copyright © 2019 Wix. All rights reserved.
//

#import "MH.h"

@implementation NSArray(MH)

- (void)mh_asyncEnumerateObjectsUsingBlock:(void (^)(id  _Nonnull obj, NSUInteger idx, BOOL* stop, dispatch_block_t next))block{
    __block NSUInteger index = 0;
    __block BOOL stop = NO;
    
    void (^next)();
    __block __weak typeof(next) weakNext;
    weakNext = next = ^void() {
        void (^strongNext)() = weakNext;
        // check if finished
        if(stop || index == self.count){
            return;
        }
        id obj = self[index];
        index++;
        block(obj, index - 1, &stop, strongNext);
    };
    next();
}

@end
