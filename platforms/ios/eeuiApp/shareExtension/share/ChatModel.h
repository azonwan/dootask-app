//
//  ChatModel.h
//  ShareExtension
//
//  Created by Hitosea-005 on 2023/6/5.
//

#import <Foundation/Foundation.h>

@interface ChatModel : NSObject

@property (nonatomic, strong)NSString *type;
@property (nonatomic, strong)NSString *name;
@property (nonatomic, strong)NSString *avatar;
@property (nonatomic, assign)NSInteger dialog_id;

@property (nonatomic, assign)BOOL select;

@end