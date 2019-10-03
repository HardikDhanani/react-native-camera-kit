//
//  MH.h
//  ReactNativeCameraKit
//
//  Created by HoookedUP-1 on 03/10/19.
//  Copyright © 2019 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSArray(MH)

- (void)mh_asyncEnumerateObjectsUsingBlock:(void (^)(id obj, NSUInteger idx, BOOL* stop, dispatch_block_t next))block;

@end

NS_ASSUME_NONNULL_END
